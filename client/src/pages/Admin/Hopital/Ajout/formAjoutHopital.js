import React,{useState,useEffect} from 'react'
import Menu from "../../Commun/menu";
import Header from "../../Commun/header";
import useFormAjoutHopital from"./useFormAjoutHopital"
import validationAjoutHopital from "./validationAjoutHopital"
import axios from "axios"
const FormAjoutHopital=()=> {


    const {
      handleOnChange,
      handleSubmit,
      values,
      errors,
    } = useFormAjoutHopital(submit, validationAjoutHopital);

    const [data, setData] = useState({
      nom: "",
      state: { nom: "" },
      adress: { nom: "", longitude: "", latitude: "" },
      telephone: "",
      capaciteTotal: "",
      capaciteCorona: "",
      capaciteRea: "",
      reacharger: "",
      totalCharger: "",
      coronaCharger: "",
  
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
        data.capaciteCorona=values.capaciteCorona
        data.capaciteTotal=values.capaciteTotal
        data.capaciteRea=values.capaciteRea
        data.state.nom=values.villev
        data.coronaCharger=values.coronaCharger
        data.totalCharger=values.totalCharger
        data.reacharger=values.reacharger
        
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
                      <h4>Ajouter un hopital </h4>
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
                          Capacite total
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="capaciteTotal"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputCapaciteTotal"
                            placeholder="Enter Capacité total"
                            value={values.capaciteTotal}
                            onChange={handleOnChange}
                          />
                          {errors.capaciteTotal && (
                            <p className="error mt-1 ml-3">
                              {errors.capaciteTotal}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="input-29"
                          className="col-sm-2 col-form-label"
                        >
                          capacite corona
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="capaciteCorona"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputCapaciteCorona"
                            placeholder="Enter Capacite Corona"
                            value={values.capaciteCorona}
                            onChange={handleOnChange}
                          />
                          {errors.capaciteCorona && (
                            <p className="error mt-1 ml-3">
                              {errors.capaciteCorona}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="input-29"
                          className="col-sm-2 col-form-label"
                        >
                          capacite reanimation
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="capaciteRea"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputCapaciteRea"
                            placeholder="Enter Capacite Reanimation"
                            value={values.capaciteRea}
                            onChange={handleOnChange}
                          />
                          {errors.capaciteRea && (
                            <p className="error mt-1 ml-3">
                              {errors.capaciteRea}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      
                      
                      <div className="form-group row">
                        <label
                          htmlFor="input-29"
                          className="col-sm-2 col-form-label"
                        >
                          Total charger
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="totalCharger"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputTotalCharger"
                            placeholder="Enter  Total charger"
                            value={values.totalCharger}
                            onChange={handleOnChange}
                          />
                          {errors.totalCharger && (
                            <p className="error mt-1 ml-3">
                              {errors.totalCharger}
                            </p>
                          )}
                        </div>
                      </div>
                      

                      <div className="form-group row">
                        <label
                        
                          className="col-sm-2 col-form-label"
                        >
                          Reanimation charger
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="reacharger"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputReaCharger"
                            placeholder="Enter  Reanimation charger"
                            value={values.reacharger}
                            onChange={handleOnChange}
                          />
                          {errors.reacharger && (
                            <p className="error mt-1 ml-3">
                              {errors.reacharger}
                            </p>
                          )}
                        </div>
                      </div>




                      <div className="form-group row">
                        <label
                          htmlFor="input-29"
                          className="col-sm-2 col-form-label"
                        >
                          Corona charger
                        </label>
                        <div className="col-sm-10">
                          <input
                            name="coronaCharger"
                            type="number"
                            className="form-control form-control-rounded"
                            id="inputCoronaCharger"
                            placeholder="Enter  Total charger"
                            value={values.coronaCharger}
                            onChange={handleOnChange}
                          />
                          {errors.coronaCharger && (
                            <p className="error mt-1 ml-3">
                              {errors.coronaCharger}
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

export default FormAjoutHopital;
