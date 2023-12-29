const Profile = require('../model/profile');

exports.createProfile = async (req, res) => {
    const { name, email, country } = req.body;

    try {
        const newProfile = new Profile({
            name,
            email,
            country
        });

        await newProfile.save();

        res.status(200).json({
            message: 'Profile Created Successfully'
        });
    } catch (err) {
        res.status(500).send(JSON.stringify(err));
    }
}

exports.readProfile = async (req, res) => {
    try {
        const profile = await Profile.find();

        res.status(200).json({
            data: profile
        });
    } catch (err) {
        res.status(500).send(JSON.stringify(err));
    }
}

exports.updateProfile = async (req, res) => {
    const { id, name, email, country } = req.body;

    try {
        const profile = await Profile.findOneAndUpdate({
            _id: id
        }, {
            $set: { name, email, country }
        }, { new: true });

        res.status(200).json({
            message: 'Profile Updated Successfully',
            data: profile
        });
    } catch (err) {
        res.status(500).send(JSON.stringify(err));
    }
}

exports.deleteProfile = async (req, res) => {
    const { id } = req.body;

    try {
        await Profile.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Profile Deleted Successfully',
        });
    } catch (err) {
        res.status(500).send(JSON.stringify(err));
    }
}
