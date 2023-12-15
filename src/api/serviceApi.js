import axios from "axios";

const serviceApi = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getById = async (id) => {
  const {data} = await serviceApi.get(`get/${id}`);
  return data;
}

export const getMaxDegreeNodes = async (type, limit) => {
  const {data} = await serviceApi.get(`max_degree/${type}&${limit}`);
  return data;
}

export const expandNode = async (id, limit) => {
  const {data} = await serviceApi.post(`expand/${id}`, {limit})
  return data;
}

export const shortestPath = async (id1, id2) => {
  const {data} = await serviceApi.get(`shortest_path/${id1}/${id2}`);
  return data;
}

export const getDataSheetFilter = async (type, page) => {
  const {data} = await serviceApi.get(`filter/${type || 'Person'}/${page || '1'}`);
  return data;
}

export const getSchema = async () => {
  const {data} = await serviceApi.get(`visualization`);
  return data;
}

export const professions_and_PMI = async () => {
  const {data} = await serviceApi.post(`professions_and_PMI`, {name: ["Aerosols", "Toxicology"]});
  return data;
}

export const profession = async () => {
  const {data} = await serviceApi.post(`profession`, {name: "Toxicology"});
  return data;
}
export const Ph_D_since_date = async () => {
  const {data} = await serviceApi.post(`Ph.D._since_date`, {Defence_date: "03/14/2010"});
  return data;
}
export const working_for_and_PMI = async () => {
  const {data} = await serviceApi.post(`working_for_and_PMI`, {name: "YSU"});
  return data;
}
export const profession_and_PMI = async () => {
  const {data} = await serviceApi.post(`profession_and_PMI`, {name: "Materials science", Defence_date: '08/04/2008'});
  return data;
}
export const similarNodes = async (person, type) => {
  const {data} = await serviceApi.post(`similar_nodes/${type[0]}`, {name: person});
  return data;
}

export const allShortestPaths = async (id1, id2) => {
  const {data} = await serviceApi.get(`all_shortest_paths/${id1}/${id2}`);
  return data;
}

export const winner = async () => {
  const {data} = await serviceApi.post(`winners`, {
    name: "Chemistry",
    Defence_date: "12/31/1999"
  });
  return data;
}

export const getFilterData = async () => {
  const {data} = await serviceApi.get(`nodes_and_relationships`);
  return data;
}

export const deleteNode = async (id) => {
  const {data} = await serviceApi.delete(`delete_node/${id}`);
  return data;
}

export const datasheetSearch = async (name, page = 1) => {
  const {data} = await serviceApi.post(`search_for_datasheet/${page}`, {name});
  return data;
}

export const visualizationSearch = async (name) => {
  const {data} = await serviceApi.post(`search_for_visualization`, {name});
  return data;
}

export const createNode = async (type, info) => {
  const {data} = await serviceApi.post(`create_node/${type}`, info);
  return data;
}

export const updateNode = async (id, info) => {
  const {data} = await serviceApi.put(`update/${id}`, info);
  return data;
}

export const filterByEdge = async (type, page) => {
  const {data} = await serviceApi.get(`filter_for_edges/${type}/${page}`);
  return data;
}

export const expandForDatasheet = async (id) => {
  const {data} = await serviceApi.get(`expand_for_datasheet/${id}`);
  return data;
}
