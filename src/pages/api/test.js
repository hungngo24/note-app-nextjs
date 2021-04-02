import dbConnect from '../../../utils/dbConnect';
dbConnect();
export default async function(req,res) {
    res.json({Test:'Test'});
}