import Premises from "../models/premises.model.js";

// TODO update premises.model.js
// TODO add functionality to view member premises

//Create a premise
export async function createPremise(req, res) {
    try {
        let premise = await Premises.create(req.body);
        if (premise) {
            res.status(200).json({
                success: true,
                message: 'Premise created successfully',
                data: premise
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Premise could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a premise
export async function viewPremise(req, res) {
    try {
        let premise = await Premises.findAll({ where: { premise_id: req.params.id } });
        if (premise) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: premise
            })
        } else {
            res.json({
                success: true,
                message: 'No premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all premises
export async function viewAllPremises(req, res) {
    try {
        let allpremises = await Premises.findAll();
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premises records retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update premise
export async function updatePremise(req, res) {

    try {
        let premise = await Premises.update(req.body, { where: { premise_id: req.params.id } });
        if (premise) {
            res.status(200).json({
                options: { multi: true },
                then: { nom: req.body.nom },
                message: 'Premise updated successfully'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'premise could not be updated at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

export async function viewMemberPremises(req, res) {
    try {
        let premise = await Premises.findAll({ where: { member_id: req.params.id } });
        if (premise) {
            res.json({
                success: true,
                message: 'Premise records of the specified member have been retrieved successfully',
                data: premise
            })
        } else {
            res.json({
                success: true,
                message: 'No premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}