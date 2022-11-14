const getAllJobs = async(req, res) =>{
    res.send("Get all jobs")
}

const getJob = async(req, res) =>{
    res.send("Get job")
}

const createJob = async(req, res) =>{
    res.json(req.user)
}

const updateJob = async(req, res) =>{
    res.send("update job")
}

const deleteJob = async(req, res) =>{
    res.send("Delete job")
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}