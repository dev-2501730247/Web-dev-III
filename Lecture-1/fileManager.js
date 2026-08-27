const fs = require('fs');

// Create File
fs.writeFile('sample.txt', 'Hello from Node.js!', (err) => {
    if (err) {
        console.log('Error creating file');
        return;
    }
    console.log('File created successfully');

    // Read File
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file');
            return;
        }
        console.log('File Content:', data);

        // Update File
        fs.appendFile('sample.txt', '\nThis is appended text.', (err) => {
            if (err) {
                console.log('Error updating file');
                return;
            }
            console.log('File updated successfully');

            // Delete File
            fs.unlink('sample.txt', (err) => {
                if (err) {
                    console.log('Error deleting file');
                    return;
                }
                console.log('File deleted successfully');
            });
        });
    });
});