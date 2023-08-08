
const express = require('express')
const app = express() 


const pets = [
    {
        petId: 1,
        imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
        description: "jkadsjd adkjask djakd ajksd askdjakd jakd sakdjsa dkajd kajdk ajdka jdkajd kasjdk asjdkas jdkasjdkajd9238492384928349283498239482394823948 qieruqwide wiry ewq",
        rating: 5,
    },
    {
        petId: 2,
        imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
        description: "jkadsjd adkjask djakd ajksd askdjakd jakd sakdjsa dkajd kajdk ajdka jdkajd kasjdk asjdkas jdkasjdkajd9238492384928349283498239482394823948 qieruqwide wiry ewq",
        rating: 1,
    },
    {
        petId: 3,
        imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
        description: "jkadsjd adkjask djakd ajksd askdjakd jakd sakdjsa dkajd kajdk ajdka jdkajd kasjdk asjdkas jdkasjdkajd9238492384928349283498239482394823948 qieruqwide wiry ewq",
        rating: 3,
    }
]

app.get('/pet-listing', (req, res) => {

    const model = {
        pageTitle: 'Pets', 
        components: [
            {
                type: "featuredImage", 
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                }
            },
            {
                type: "featuredImage",
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                }
            },
            {
                type: "featuredImage",
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                }
            },
            {
                type: "carousel",
                data: {
                    items: pets,
                    action: {
                        type: "sheet",
                        destination: "petDetail"
                    }
                }
            },
            {
                type: "featuredImage",
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                }
            }
        ]
    }

    res.json(model)
})

// pet-detail/:id
app.get('/pet-detail/:petId', (req, res) => {
  const petId = parseInt(req.params.petId)
  const pet = pets.find(pet => pet.petId === petId)

    const model = {
      pageTitle: 'Pet Detail',
        components: [
            {
                type: 'featuredImage',
                data: {
                    imageUrl: pet.imageUrl
                }
            },
            {
                type: 'textRow',
                data: {
                    text: pet.description
                }
            },
            {
                type: 'rating',
                data: {
                    rating: pet.rating
                }
            }
        ]
    }

    res.json(model)

})


app.listen(3000, () => {
    console.log('Server is running...')
})