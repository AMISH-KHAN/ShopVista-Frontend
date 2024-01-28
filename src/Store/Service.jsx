// maincategory
const admintoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1MGMzMDllYmE4Yzk1ZjZiMjg2MjJkMSIsIm5hbWUiOiJBZG1pbm5ldyIsInVzZXJuYW1lIjoiQWRtaW5uZXciLCJwYXNzd29yZCI6IiQyYiQxMiR3YjA5dmtIMEkwcG05Mi9Tb2lBQlFPcm4yVTdIMGE0aHJ4Ui81U2trbXNLN3k5SlRlVTNURyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGhvbmUiOiI4OTY3NDUzIiwiYWRkcmVzc2xpbmUxIjoiIiwiYWRkcmVzc2xpbmUyIjoiIiwiYWRkcmVzc2xpbmUzIjoiIiwicGluIjoiIiwiY2l0eSI6IiIsInN0YXRlIjoiIiwicGljIjoiIiwicm9sZSI6ImFkbWluIiwic3RhdHVzIjoiQWN0aXZlIiwiX192IjowfSwiaWF0IjoxNjk1Mjk3NzgzfQ._gis0JwKxY6lBIZkE5xOlfV14MC9Zb66XOt-CNc_lN0"

const usertoken=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1MGMzMGRjYmE4Yzk1ZjZiMjg2MjJkMyIsIm5hbWUiOiJVc2VybmV3IiwidXNlcm5hbWUiOiJVc2VybmV3IiwicGFzc3dvcmQiOiIkMmIkMTIkejhsQks4dWExemZBSkZBM2JtVlprTzIxWnV2UnR3aVBmSDNGYkloT0hOZnJnbXJJVS5Dem0iLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGhvbmUiOiI4OTY3NDUzIiwiYWRkcmVzc2xpbmUxIjoiIiwiYWRkcmVzc2xpbmUyIjoiIiwiYWRkcmVzc2xpbmUzIjoiIiwicGluIjoiIiwiY2l0eSI6IiIsInN0YXRlIjoiIiwicGljIjoiIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJfX3YiOjB9LCJpYXQiOjE2OTUyOTc5MTR9.VvZD7qQokt9p66vqXDzmyCv9NPAStIYVD2FGCvaAK54`
export async function createMaincategoryApi(data) {
    var response =await fetch("api/maincategory", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        "content-type":"application/json"
        },
        body: JSON.stringify(data)
        
    })
    return await response.json()
}

export async function getMaincategoryApi() {
    var response =await fetch("api/maincategory", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        "content-type":"application/json"
        }
        
    })
    return await response.json()
}

export async function updateMaincategoryApi(data) {
    var response =await fetch("api/maincategory/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteMaincategoryApi(data) {
    var response =await fetch("api/maincategory/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        "content-type":"application/json"
        }
    })
    return await response.json()
}
// subcategory
export async function createSubcategoryApi(data) {
    var response =await fetch("api/subcategory", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
        "content-type":"application/json"
        },
        body: JSON.stringify(data)
        
    })
    return await response.json()
}

export async function getSubcategoryApi() {
    var response =await fetch("api/subcategory", {
        method: "get",
        headers:{
        "content-type":"application/json"
        }
        
    })
    return await response.json()
}

export async function updateSubcategoryApi(data) {
    var response =await fetch("api/subcategory/"+data.id, {
        method: "put",
        headers:{
        "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteSubcategoryApi(data) {
    var response =await fetch("api/subcategory/"+data.id, {
        method: "delete",
        headers:{
        "content-type":"application/json"
        }
    })
    return await response.json()
}

// brands

export async function createBrandApi(data) {
    let response =await fetch("api/brand", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getBrandApi() {
    let response =await fetch("api/brand", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateBrandApi(data) {
    let response =await fetch("api/brand/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteBrandApi(data) {
    let response =await fetch("api/brand/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// products

export async function createProductApi(data) {
    let response =await fetch("api/product", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getProductApi() {
    let response =await fetch("api/product", {
        method: "get",
        headers: {
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateProductApi(data) {
    
    let response =await fetch("api/product/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteProductApi(data) {
    let response =await fetch("api/product/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// users

export async function createUserApi(data) {
    let response =await fetch("api/user", {
        method: "post",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getUserApi() {
    let response =await fetch("api/user", {
        method: "get",
        headers: {
            'Authorization': `${admintoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateUserApi(data) {
    
    let response =await fetch("api/user/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteUserApi(data) {
    let response =await fetch("api/user/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// carts

export async function createCartApi(data) {
    let response =await fetch("api/cart", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getCartApi() {
    let response =await fetch("api/cart", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCartApi(data) {
    console.log("service",data)
    let response =await fetch("api/cart/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCartApi(data) {
    let response =await fetch("api/cart/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// wishlists

export async function createWishlistApi(data) {
    let response =await fetch("api/wishlist", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getWishlistApi() {
    let response =await fetch("api/wishlist", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateWishlistApi(data) {
    
    let response =await fetch("api/wishlist/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteWishlistApi(data) {
    let response =await fetch("api/wishlist/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// Checkout

export async function createCheckoutApi(data) {
    let response =await fetch("api/checkout", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getCheckoutApi() {
    let response =await fetch("api/checkout", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCheckoutApi(data) {
    
    let response =await fetch("api/checkout/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCheckoutApi(data) {
    let response =await fetch("api/checkout/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// Contact

export async function createContactApi(data) {
    let response =await fetch("api/contact", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${usertoken}`,
            
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getContactApi() {
    let response =await fetch("api/contact", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateContactApi(data) {
    
    let response =await fetch("api/contact/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteContactApi(data) {
    let response =await fetch("api/contact/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        }
    })
    return await response.json()
}

// Newsletter

export async function createNewsletterApi(data) {
    let response =await fetch("api/newsletter", {
        method: "post",
        headers: {
            'Authorization': `Bearer ${usertoken}`,

            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    return await response.json()
}

export async function getNewsletterApi() {
    let response =await fetch("api/newsletter", {
        method: "get",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateNewsletterApi(data) {
    
    let response =await fetch("api/newsletter/"+data.id, {
        method: "put",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteNewsletterApi(data) {
    let response =await fetch("api/newsletter/"+data.id, {
        method: "delete",
        headers: {
            'Authorization': `Bearer ${admintoken}`,

            "content-type":"application/json"
        }
    })
    return await response.json()
}