const {Schema,model,SchemaTypes}=require("mongoose");

const productSchema=new Schema({
    productMenu :{
        type:SchemaTypes.String,
        required:true

    },
    productStock:{
        type:SchemaTypes.Number,
        required:true

    },
productType:{
    type:SchemaTypes.String,
    required:true
},
productCode:{
    type:SchemaTypes.Number,
    required:true
}, 
productTitle:{
    type:SchemaTypes.String,
    required:true
},
totalStock:{
    type:SchemaTypes.Number,
    required:true
},  
costPerItem:{
    type:SchemaTypes.Number,
    required:true
}
})
module.exports=model("products",productSchema);

