import React ,{useEffect,useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from "axios"

const DatatablePage = () => {
    const [hopital, setHopital] = useState([]);
    
    
    useEffect(() => {
        const fetchHopital = async () => {
        
          const res = await axios.get('https://anti-covid-19.herokuapp.com/api/hospitals');
          setHopital(res.data);
          
        };
        fetchHopital();
    }, []);
    console.log(hopital)


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
        label: 'Capacite Totale',
        field: 'capaciteTotal',
        sort: 'asc',
        width: 100
      },

      {
        label: ' Capacite Corona',
        field: 'capaciteCorona',
        sort: 'asc',
        width: 100
      },
      {
        label: ' Capacite de Reanimation',
        field: 'capaciteRea',
        sort: 'asc',
        width: 100
      },
      {
        label: 'nb totale charger',
        field: 'totalCharger',
        sort: 'asc',
        width: 100
      },
      {
        label: ' Nb Corona Charger',
        field: 'coronaCharger',
        sort: 'asc',
        width: 100
      },
      {
        label: ' Nb Reanimation charger',
        field: 'reacharger',
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

    rows: hopital.map(hop => {
   
        return {
          name: hop.nom,
          adr: hop.adress.nom,
          telephone: hop.telephone,
          capaciteTotal: hop.capaciteTotal,
          capaciteCorona: hop.capaciteCorona,
          capaciteRea: hop.capaciteRea,
          totalCharger: hop.totalCharger,
          coronaCharger: hop.coronaCharger,
          reacharger: hop.reacharger,
         

          supprimer: (
            <button
              type="button"
              className="btn btn-outline-danger waves-effect waves-light"
              onClick={()=>handleDelete(hop)}
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