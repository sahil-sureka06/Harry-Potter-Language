import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

// --- START: New Code for Keyword Suggestions ---

// A list of all the keywords in your language
const KEYWORDS = [
    'Scroll', 'Reparo', 'Revelio', 'Murmur', 'Accio', 'AccioNum',
    'Expecto', 'Cast', 'Also', 'Patronum', 'Finite',
    'Repeat', 'Until', 'By', 'Loop',
    'Spell', 'OwlPost',
    'Evanesco', 'Skip',
    'And', 'Or', 'Not',
    'Lumos', 'Nox', 'Obliviate',
    'Numeris', 'Verbis',
    'Pack', 'Unpack', 'Measure', 'Combine'
];

const completionProvider = vscode.languages.registerCompletionItemProvider(
    'harrypotter', // This must match the language ID in your package.json
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            
            // Create a simple completion item for each keyword
            const completionItems = KEYWORDS.map(keyword => {
                const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                return item;
            });

            return completionItems;
        }
    }
);
// --- END: New Code for Keyword Suggestions ---


let harryPotterTerminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {

    // --- Add the new completion provider to the context ---
    context.subscriptions.push(completionProvider);

    let disposable = vscode.commands.registerCommand('harrypotter.run', () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showInformationMessage('No active editor. Open a .magic file to run a spell.');
            return;
        }
        
        const document = editor.document;
        const filePath = document.fileName;
        
        document.save().then(saved => {
            if (saved) {
                const extensionPath = context.extensionPath;
                const shellPath = path.join(extensionPath, 'shell1.py');
                const pythonCommand = `python "${shellPath}" "${filePath}"`;

                if (!harryPotterTerminal || harryPotterTerminal.exitStatus !== undefined) {
                    harryPotterTerminal = vscode.window.createTerminal("Harry Potter Output");
                }
                
                harryPotterTerminal.show();
                harryPotterTerminal.sendText(pythonCommand);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    if (harryPotterTerminal) {
        harryPotterTerminal.dispose();
    }
}