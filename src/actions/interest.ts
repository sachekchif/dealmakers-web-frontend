// 'use server'
const BASEURL= "https://api-staging.domingoteamrealty.com/v1";
 

// export async function showInterest(propertyId:string, formData :FormData) {
export async function showInterest(data:{
    name: string
    email: string
    phone_no: string
  },propertyId:string) {
    console.log(data);
    const rawFormData={...data,password: "password1$" }
  //   const rawFormData = {
  //     "name" : "{{$randomFullName}}",
  //     "email": "{{$randomEmail}}",
  //     "phone_no" : "0000000999",
  //     "password": "password1$"
  // }
    // const rawFormData = {
    //     name: formData.get('name')|| "{{$randomname}}",
    //     email: formData.get('email') || "{{$randomEmail}}",
    //     phone_no: formData.get('phone_no') || "00000000000",
    //     password: "password1$"
    //   }

        try {
          const response = await fetch(`${BASEURL}/misc/properties/${propertyId}/interest`, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              "Accept": 'application/json',
            },
            body: JSON.stringify(rawFormData),
          });
          const result = await response.json();          
          console.log("Success:", result);
          if (result.errors) {
            throw new Error(result?.message); // Throw specific error
          }
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`); // Throw specific error
          }
          return result
        } catch (error:any) {
          console.error("Error:", error);
          throw new Error(error?.message); // Throw specific error

        }
   }