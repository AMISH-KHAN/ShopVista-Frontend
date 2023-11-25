// maincategory
export async function createMaincategoryApi(data) {
    var response =await fetch("http://localhost:8000/maincategory", {
        method: "post",
        headers:{
        "content-type":"application/json"
        },
        body: JSON.stringify(data)
        
    })
    return await response.json()
}

export async function getMaincategoryApi() {
    var response =await fetch("http://localhost:8000/maincategory", {
        method: "get",
        headers:{
        "content-type":"application/json"
        }
        
    })
    return await response.json()
}

export async function updateMaincategoryApi(data) {
    var response =await fetch("http://localhost:8000/maincategory/"+data.id, {
        method: "put",
        headers:{
        "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteMaincategoryApi(data) {
    var response =await fetch("http://localhost:8000/maincategory/"+data.id, {
        method: "delete",
        headers:{
        "content-type":"application/json"
        }
    })
    return await response.json()
}
// subcategory
export async function createSubcategoryApi(data) {
    var response =await fetch("http://localhost:8000/subcategory", {
        method: "post",
        headers:{
        "content-type":"application/json"
        },
        body: JSON.stringify(data)
        
    })
    return await response.json()
}

export async function getSubcategoryApi() {
    var response =await fetch("http://localhost:8000/subcategory", {
        method: "get",
        headers:{
        "content-type":"application/json"
        }
        
    })
    return await response.json()
}

export async function updateSubcategoryApi(data) {
    var response =await fetch("http://localhost:8000/subcategory/"+data.id, {
        method: "put",
        headers:{
        "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteSubcategoryApi(data) {
    var response =await fetch("http://localhost:8000/subcategory/"+data.id, {
        method: "delete",
        headers:{
        "content-type":"application/json"
        }
    })
    return await response.json()
}

// brands

export async function createBrandApi(data) {
    let response =await fetch("http://localhost:8000/brand", {
        method: "post",
        headers: {
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getBrandApi() {
    let response =await fetch("http://localhost:8000/brand", {
        method: "get",
        headers: {
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateBrandApi(data) {
    let response =await fetch("http://localhost:8000/brand/"+data.id, {
        method: "put",
        headers: {
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteBrandApi(data) {
    let response =await fetch("http://localhost:8000/brand/"+data.id, {
        method: "delete",
        headers: {
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// products

export async function createProductApi(data) {
    let response =await fetch("http://localhost:8000/product", {
        method: "post",
        headers: {
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getProductApi() {
    let response =await fetch("http://localhost:8000/product", {
        method: "get",
        headers: {
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateProductApi(data) {
    
    let response =await fetch("http://localhost:8000/product/"+data.id, {
        method: "put",
        headers: {
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteProductApi(data) {
    let response =await fetch("http://localhost:8000/product/"+data.id, {
        method: "delete",
        headers: {
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}