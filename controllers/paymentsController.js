import Payments from "../models/paymentsModel.js"

//Capture Reading
export async function capture_payments(req, res) {
    try {
        let payment = await Payments.create(req.body);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Bill successfully captured',
                data: payment
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

// View all payments
export async function ViewAllPayments(req, res) {
    try {
        let payments = await Payments.findAll();
        if (payments) {
            res.status(200).json({
                success: true,
                message: 'payments successfully retrieved',
                data: payments
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'payments records could not be retrieved at this time'
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

//view payments by premise
export async function ViewPremisePayment(req, res) {
    try {
        let payments = await Payments.findAll({ where: { premise_id: req.params.id } });
        if (payments) {
            res.status(200).json({
                success: true,
                message: 'payments successfully retrieved',
                data: payments
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'payments records could not be retrieved at this time'
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