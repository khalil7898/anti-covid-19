import React,{useState,useEffect} from 'react'
import Menu from "../../Commun/menu";
import Header from "../../Commun/header";
import useFormAjoutCentre from"./useFormAjoutCentre"
import validationAjoutCentre from "./validationAjoutCentre"
import axios from "axios"
const FormAjoutCentre=()=> {

    const {
        handleOnChange,
        handleSubmit,
        values,
        errors,
      } = useFormAjoutCentre(submit, validationAjoutCentre);


      const [data, setData] = useState({
        nom: "",
        state: { nom: "" },
        adress: { nom: "", longitude: "", latitude: "" },
        telephone: "",
        capacite: "",
        nombrePersonne:"",   
      });

      function submit() {
        console.log("submmited");
        console.log(data);
        const newData = {...data}
        console.log({data})
        console.log({newData})
        console.log({ville})
  
        const state = ville.find(v => v.nom === data.state.nom)
  
        newData.state = state?state._id: null
        console.log({newData})
        axios
          .put("https://anti-covid-19.herokuapp.com/api/hospitals", newData, {
            headers: { Authorization: "Bearer "+localStorage.getItem("token") },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      data.nom=values.nom;
      data.adress.nom=values.adressnom
      data.telephone=values.telephone
      data.adress.latitude=values.latitude
      data.adress.longitude=values.longitude
      data.capacite=values.capacite
      data.nombrePersonne=values.nombrePersonne
      data.state.nom=values.villev
    
      const [ville, setVille] = useState([]);
      useEffect(() => {
       const fetchVille = async () => {
         const res = await axios.get(
           "https://anti-covid-19.herokuapp.com/api/getStates"
         );
         setVille(res.data);
       };
       fetchVille();
     }, []);
     return (
        <div id="wrapper"  className="in  ">
          <Header />
          <Menu />

          <div>
            <div className="clearfix" />
            <div className="content-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-info">
                    <h4>Ajouter un Centre de Confinement </h4>
                  </div>
                  <hr />

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group row">
                      <label
                        htmlFor="input-26"
                        className="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="nom"
                          id="inputNom"
                          className="form-control form-control-rounded"
                          placeholder="Enter Hospital Name"
                          value={values.nom}
                          onChange={handleOnChange}
                        />
                        {errors.nom && (
                          <p className="error mt-1 ml-3">{errors.nom}</p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="input-26"
                        className="col-sm-2 col-form-label"
                      >
                        Ville
                      </label>
                      <div className="col-sm-10">
                        
                        <select
                          className="form-control single-select"
                          name="villev"
                          id="inpuVtVillev"
                          value={values.villev}
                          onChange={handleOnChange}
                        >
                           <option value="" disabled selected>Choisir la ville </option>
                          {ville.map((v) => (
                            <option key={v._id}>{v.nom}</option>
                          ))}
                        </select>
                        {errors.villev && (
                          <p className="error mt-1 ml-3">{errors.villev}</p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Address Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="adressnom"
                          id="inputAdrName"
                          type="text"
                          className="form-control form-control-rounded"
                          placeholder="Enter Hospital Address"
                          value={values.adressnom}
                          onChange={handleOnChange}
                        />
                        {errors.adressnom && (
                          <p className="error mt-1 ml-3">
                            {errors.adressnom}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-5 ">
                        <div className="input-group mb-3">
                          <label>longitude</label>

                          <input
                            name="longitude"
                            id="inputLongitude"
                            type="number"
                            step="0.000001"
                            className="form-control ml-5"
                            placeholder="longitude"
                            value={values.longitude}
                            onChange={handleOnChange}
                          />
                          {errors.longitude && (
                            <p className="error mt-1 ml-3">
                              {errors.longitude}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="input-group mb-3">
                          <label>latitude</label>

                          <input
                            name="latitude"
                            id="inputLatitude"
                            type="number"
                            step="0.000001"
                            className="form-control  ml-5"
                            placeholder="latitude"
                            value={values.latitude}
                            onChange={handleOnChange}
                          />
                          {errors.latitude && (
                            <p className="error mt-1 ml-3">
                              {errors.latitude}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="input-26"
                        className="col-sm-2 col-form-label"
                      >
                        telephone
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="telephone"
                          type="number"
                          id="inputTel"
                          className="form-control form-control-rounded"
                          placeholder="Enter Hospital telephone"
                          value={values.telephone}
                          onChange={handleOnChange}
                        />
                        {errors.telephone && (
                          <p className="error mt-1 ml-3">
                            {errors.telephone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="input-28"
                        className="col-sm-2 col-form-label"
                      >
                        Capacite 
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="capacite"
                          type="number"
                          className="form-control form-control-rounded"
                          id="inputCapacite"
                          placeholder="Enter Capacité "
                          value={values.capacite}
                          onChange={handleOnChange}
                        />
                        {errors.capacite && (
                          <p className="error mt-1 ml-3">
                            {errors.capacite}
                          </p>
                        )}
                      </div>
                    </div>
                   
                    
                    
                    <div className="form-group row">
                      <label
                        htmlFor="input-29"
                        className="col-sm-2 col-form-label"
                      >
                        Nombre de Personne
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="nombrePersonne"
                          type="number"
                          className="form-control form-control-rounded"
                          id="inputNombrePersonne"
                          placeholder="Enter nombre de Personne"
                          value={values.nombrePersonne}
                          onChange={handleOnChange}
                        />
                        {errors.nombrePersonne && (
                          <p className="error mt-1 ml-3">
                            {errors.nombrePersonne}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label" />
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label" />
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-success btn-round waves-effect waves-light  px-5"
                        >
                          <i className="icon-plus icons " /> Ajouter
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*End content-wrapper*/}
          </div>
        </div>
      );

}
export default FormAjoutCentre;