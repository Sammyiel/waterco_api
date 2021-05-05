import Billing from "../models/billingModel.js"

//Capture Reading
export async function capture_reading(req, res) {
    try {
        let billing = await Billing.create(req.body);
        if (billing) {
            res.status(200).json({
                success: true,
                message: 'Bill successfully captured',
                data: billing
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be created at this time'
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

// View all viewAll billings
export async function viewAllBillings(req, res) {
    try {
        let billings = await Billing.findAll();
        if (billings) {
            res.status(200).json({
                success: true,
                message: 'All bills successfully retrieved',
                data: billings
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be retrieved at this time'
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

// View bill
export async function viewBill(req, res) {
    try {
        let billings = await Billing.findAll({ where: { billing_id: req.params.id } });
        if (billings) {
            res.status(200).json({
                success: true,
                message: 'Bill successfully retrieved',
                data: billings
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be retrieved at this time'
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