const authorized=(req,res,next)=>{
    const {user}=req.query;
    if (user==='john'){
        req.user={name:'john',id:4}
        
    } else{
        res.status(401).send('unauthorized')
    }next()
}
module.exports=authorized