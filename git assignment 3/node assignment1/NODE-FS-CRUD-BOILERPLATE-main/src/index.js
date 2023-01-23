const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {

	await fs.writeFile(fileName, fileContent, (err) => {
		console.log(err)
	})

}

const myFileReader = async (fileName) => {

	const data = await fs.readFile(fileName, "utf-8")
	console.log(data)

}


const myFileUpdater = async (fileName, fileContent) => {

	await fs.appendFile(fileName, fileContent)

}

const myFileDeleter = async (fileName) => {

	fs.unlink(fileName)

}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

myFileWriter("demofile.txt", "Hello world")
myFileUpdater("demofile.txt", " How r u all?")
myFileReader("demofile.txt")
myFileDeleter("demofile.txt")