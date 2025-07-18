import mongoose, {models, model} from "mongoose";

interface sample {

    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password?: string;

}

const sampleSchema = new mongoose.Schema<sample>({


    name: {

        type: String,
        required: true,
    },
    email: {

        type: String,
        required: true,
    },

    password: {

        type: String,
    }


});

const sampleModel = models?.Sample || model<sample>("User", sampleSchema);

export default sampleModel;