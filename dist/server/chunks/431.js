"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ saveCronica),
/* harmony export */   "N$": () => (/* binding */ getMasters),
/* harmony export */   "Ok": () => (/* binding */ saveMaster),
/* harmony export */   "gC": () => (/* binding */ getCronicas),
/* harmony export */   "jo": () => (/* binding */ getCronica)
/* harmony export */ });
/* unused harmony exports updateJugadorConnected, updateJugador */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__);



const getServer = () => {
  // const supabase_key = process.env.REACT_APP_SUPABASE_KEY;
  const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseXJsbHB3cXNjZXVncXpwb2VlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTk4ODYxMiwiZXhwIjoxOTc1NTY0NjEyfQ.djPCjjYiMJetB0LrQn2dOZ12k794Vqw3jUjFIBNN2p4';
  return ['https://llyrllpwqsceugqzpoee.supabase.co', {
    headers: {
      'apikey': supabase_key,
      'Authorization': `Bearer ${supabase_key}`
    }
  }, supabase_key];
};

const [url, headers, supabase_key] = getServer();
const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(url, supabase_key);
const getMasters = (callback, errorcallback) => {
  const [url, headers] = getServer();
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}/rest/v1/masters?select=id,nombre,nickname,email`, headers).then(response => {
    callback(response.data);
  }).catch(err => {
    errorcallback(err);
  });
};
const getCronicas = (idMaster, callback, errorcallback) => {
  const [url, headers] = getServer();
  let urlCronicas = `${url}/rest/v1/cronicas?select=*,master(*)`;

  if (idMaster) {
    urlCronicas = `${urlCronicas}&master=eq.${idMaster}`;
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${urlCronicas}`, headers).then(response => {
    callback(response.data);
  }).catch(err => {
    errorcallback(err);
  });
};
const saveMaster = (master, callback, errorcallback) => {
  const [url, headers] = getServer();
  headers.headers['Prefer'] = 'resolution=merge-duplicates,return=representation';
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${url}/rest/v1/masters?select=id,nombre,nickname,email`, master, headers).then(response => {
    callback(response.data);
  }).catch(err => {
    errorcallback(err);
  });
};
const saveCronica = (cronica, callback, errorcallback) => {
  const [url, headers] = getServer();
  headers.headers['Prefer'] = 'resolution=merge-duplicates,return=representation';
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${url}/rest/v1/cronicas?select=*,master(*)`, cronica, headers).then(response => {
    callback(response.data);
  }).catch(err => {
    errorcallback(err);
  });
}; // export const getCronica = (idCronica, callback, errorcallback) => {
//     const [url, headers] = getServer();
//     return axios.get(`${url}/rest/v1/cronicas?id=eq.${idCronica}&select=nombre,links,masters(nickname),jugadores(nickname,personaje)`, headers)
//         .then((response) => {
//             callback(response.data);
//         })
//         .catch((err) => {
//             errorcallback(err);
//         });
// };

const getCronica = async (idCronica, callback, errorcallback) => {
  const {
    data: cronica,
    error
  } = await supabase.from('cronicas').select('id,nombre,links,masters(id,nickname),jugadores(id,nickname,personaje)').eq('id', idCronica).single();

  if (error) {
    errorcallback(error);
  } // cronica.jugadores = cronica?.jugadores?.sort((a, b) => a.personaje.localeCompare(b.personaje));


  callback(cronica);
};
const updateJugadorConnected = async (idJugador, conectado, isMaster, callback, errorcallback) => {
  const tabla = isMaster === true ? 'masters' : 'jugadores';
  const {
    data: jugador,
    error
  } = await supabase.from(tabla).update({
    conectado
  }).eq('id', idJugador).single();

  if (error) {
    errorcallback(error);
  }

  callback(jugador);
};
const updateJugador = async (idJugador, jugador, callback, errorcallback) => {
  const {
    data: jugadorActualizado,
    error
  } = await supabase.from('jugadores').update(jugador).eq('id', idJugador).single();

  if (error) {
    errorcallback(error);
  }

  callback(jugadorActualizado);
};

/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZB": () => (/* binding */ hydrate),
/* harmony export */   "kz": () => (/* binding */ cronicaSlice)
/* harmony export */ });
/* unused harmony exports setCronica, setJugadores, setMaster */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  cronica: {
    id: '',
    nombre: "",
    master: {
      id: '',
      nombre: "",
      nick: ""
    },
    jugadores: []
  }
};
const cronicaSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "cronica",
  initialState,
  reducers: {
    setCronica: (state, action) => {
      state.cronica.id = action.payload.id;
      state.cronica.nombre = action.payload.nombre;
    },
    setJugadores: (state, action) => {
      state.cronica.jugadores.push(action.payload);
    },
    setMaster: (state, action) => {
      state.cronica.master = action.payload;
    },
    hydrate: (state, action) => {
      return action.payload;
    }
  }
});
const {
  setCronica,
  setJugadores,
  setMaster,
  hydrate
} = cronicaSlice.actions;

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ cronicaStore)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/services/store/cronica.js
var cronica = __webpack_require__(709);
;// CONCATENATED MODULE: ./src/services/store/cronicas.js

const initialState = {
  cronicas: [],
  masters: [],
  jugadores: []
};
const datosSlice = (0,toolkit_.createSlice)({
  name: "datos",
  initialState,
  reducers: {
    setCronicas: (state, action) => {
      state.cronicas = [...state.cronicas, action.payload];
    },
    setMasters: (state, action) => {
      state.masters = [...state.masters, action.payload];
    },
    setJugadores: (state, action) => {
      state.jugadores = [...state.jugadores, action.payload];
    }
  }
});
const {
  setCronicas,
  setJugadores,
  setMasters
} = datosSlice.actions;
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
;// CONCATENATED MODULE: ./src/services/store/state.js




const cronicaStore = (0,toolkit_.configureStore)({
  reducer: (0,external_redux_.combineReducers)({
    cronica: cronica/* cronicaSlice.reducer */.kz.reducer,
    datos: datosSlice.reducer
  })
});

/***/ })

};
;