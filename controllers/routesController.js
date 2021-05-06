import Routes from "../models/routesModel.js"

//create routes
export async function create_route(req, res) {
    try {
        let route = await Routes.create(req.body);
        if (route) {
            res.status(200).json({
                success: true,
                message: 'Route successfully created',
                data: route
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Route could not be created at this time'
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

//view routes
export async function viewRoutes(req, res) {
    try {
        let allroutes = await Routes.findAll();
        if (allroutes) {
            res.json({
                success: true,
                message: 'All routes record retrieved successfully',
                data: allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No routes records found.',
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

//edit/update route
export async function updateRoute(req, res) {

    try {
        let route = await Routes.update({ where: { member_id: req.params.id } });
        if (route) {
            res.status(200).json({
                options: { multi: true },
                then: { nom: req.body.nom },
                //data: nom.splice(0, +1),
                message: 'route record updates successfully'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'route record could not be updated at this time'
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


//view premise on route
export async function viewPremiseRoute(req, res) {
    try {
        let route = await Routes.findAll({ where: { route_id: req.params.id } });
        if (route) {
            res.json({
                success: true,
                message: 'premise on route records retrieved successfully',
                data: route
            })
        } else {
            res.json({
                success: true,
                message: 'No premise on route records found.',
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