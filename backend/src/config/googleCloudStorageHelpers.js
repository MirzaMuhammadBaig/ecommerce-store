const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    keyFilename: 'keys.json',
    projectId: 'project-7-373914',
});

const bucket = storage.bucket('project-7-assets'); // should be your bucket name

const imageUploader = ({ id, name, image }) => {
    return new Promise((resolve, reject) => {
        // console.log(image);
        const { mimetype, buffer } = image;
        // console.log(mimetype);
        const type = mimetype.split('/')[1];
        // console.log(mimetype);
        const imageName = id + '/' + name + '.' + type;

        const blob = bucket.file(imageName);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });
        blobStream
            .on('finish', () => {
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                resolve(publicUrl);
            })
            .on('error', (error) => {
                console.log(`Unable to upload image, something went wrong`, error);
                reject(`Unable to upload image, something went wrong`);
            })
            .end(buffer);
    });
};

module.exports = {
    imageUploader
};