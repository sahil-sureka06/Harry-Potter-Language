import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

// We'll store a reference to our terminal so we can reuse it
let harryPotterTerminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('harrypotter.run', () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showInformationMessage('No active editor. Open a .magic file to run a spell.');
            return;
        }

        const document = editor.document;
        const filePath = document.fileName;

        // Save the file before running
        document.save().then(saved => {
            if (saved) {
                const extensionPath = context.extensionPath;
                const shellPath = path.join(extensionPath, 'shell1.py');

                // This is the full command we want to run in the terminal
                const pythonCommand = `python3 "${shellPath}" "${filePath}"`;

                // If our terminal is closed, create a new one
                if (!harryPotterTerminal || harryPotterTerminal.exitStatus !== undefined) {
                    harryPotterTerminal = vscode.window.createTerminal("Harry Potter Output");
                }

                // Show the terminal to the user and send the command to be executed
                harryPotterTerminal.show();
                harryPotterTerminal.sendText(pythonCommand);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up the terminal when the extension is deactivated
    if (harryPotterTerminal) {
        harryPotterTerminal.dispose();
    }
}