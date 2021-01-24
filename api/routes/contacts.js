const exp = require('express');
const { remove } = require('../models/contactdb');
// const { models } = require('mongoose');
const router = exp.Router()
const mkcontact = require('../models/contactdb')

router.get('/', (rq,rs,nx)=>{

    // rs.render('home')
    mkcontact.find().select("name phoneno email _id").exec()
    .then(docs=>{
        
        const selfresponse = {
            count : docs.length,
            contacts : docs
        }
        rs.status(200).json(selfresponse)

    })
    .catch(err=>rs.status(404))
    
})
router.post('/add', (rq,rs,nx)=>{
    console.log(rq.body)
    const contact1 = new mkcontact({
        name : rq.body.name,
        phoneno:rq.body.phno,
        email : rq.body.emailadd,
    })
        contact1.save().then(data=>{
            console.log('user added');
            rs.status(201).json(data)
        }) 
        .catch(er =>{
            console.log(er)
        })
    
});

router.get('/:id' , (rq,rs,nx)=>{
    const eid = rq.params.id;
    mkcontact.findById(eid).exec().then(doc=>{

            console.log('from database' , doc)

            if(doc)
                rs.status(200).json(doc);
        else{

            }


    });

    
});
router.post('/update/:id' , (rq,rs,nx)=>{
    const eid = rq.params.id;
    mkcontact.findById(eid)
             
            .then( doc =>{
                doc.name = rq.body.name;
                doc.phoneno = rq.body.phno;
                doc.email = rq.body.emailadd;


            console.log('from database' , doc)
            
            doc.save()
            .then(()=>rs.status(200).json(doc))
            .catch(er=> console.log(er));
          })
           
          

    
});
router.delete('/:id' , (rq,rs,nx)=>{
    const eid = rq.params.id;
    mkcontact.remove({_id : eid}).exec().then(result=>rs.status(200).json(result))
    .catch(er=>rs.status(404).json(er))
    
    // rs.status(200).json({
    //     message : `you deleted the contact ${eid}`,
    // })
})
module.exports = router;
