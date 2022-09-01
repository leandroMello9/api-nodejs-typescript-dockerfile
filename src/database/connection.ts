import { connect } from 'mongoose';

const uri = "mongodb://mongoadmin:secret@localhost:27017/Todo?authSource=admin";


export default () => {
    connect(uri, {

    }, (err) => {
        if(err) {
        throw new Error(`Error ao connectar ao banco ${err}`);

        }
    })
    
}