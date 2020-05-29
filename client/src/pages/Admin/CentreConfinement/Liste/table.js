import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"




const DatatablePage = () => {
    const [centre, setCentre] = useState([]);
    
    
    useEffect(() => {
        const fetchCentre = async () => {
        
          const res = await axios.get('https://anti-covid-19.herokuapp.com/api/hospitals');
          setCentre(res.data);
          
        };
        fetchCentre();
    }, []);
    console.log(centre)


const handleDelete=async(data)=>
{

  
  console.log(data._id)
  console.log(localStorage.getItem("token"))
  axios
  .delete("https://anti-covid-19.herokuapp.com/api/hospitals", {id:data._id},
   {
    "headers": { "Authorization": "Bearer "+localStorage.getItem("token") },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
}

  
    const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: ' Adress',
        field: 'adr',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Telephone',
        field: 'telephone',
        sort: 'asc',
        width: 200
      }, 
      {
        label: 'Capacite ',
        field: 'capacite',
        sort: 'asc',
        width: 100
      },

   
    
      {
        label: ' nombre de Personne',
        field: 'nombrePersonne',
        sort: 'asc',
        width: 100
      },
      {
        label: ' supprimer',
        field: 'supprimer',
        sort: 'asc',
        width: 100
      },

     
   
    ],

    rows: centre.map(cent => {
   
        return {
          name: cent.nom,
          adr: cent.adress.nom,
          telephone: cent.telephone,
          capacite: cent.capacite,
        nombrePersonne: cent.nombrePersonne,
        

          supprimer: (
            <button
              type="button"
              className="btn btn-outline-danger waves-effect waves-light"
              onClick={()=>handleDelete(cent)}
            >
              <i className="fa fa fa-trash-o" />{" "}
            </button>
          ),
        };
      })
         
      
    
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    >
   


    </MDBDataTable>
  );
}

export default DatatablePage;