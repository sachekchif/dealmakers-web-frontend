
const BASEURL= "https://api-staging.domingoteamrealty.com/v1";

export async function getFeatureProps() {
    const res = await fetch(`${BASEURL}/misc/properties/`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export async function getSingleProp(slug:string) {
    const res = await fetch(`${BASEURL}/misc/properties/${slug}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
