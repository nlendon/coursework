import {
    allShortestPaths,
    Ph_D_since_date,
    profession,
    profession_and_PMI,
    professions_and_PMI, shortestPath, similarNodes, winner,
    working_for_and_PMI
} from "../../../api/serviceApi";
import Chart from "../../../Visualization/Chart";

export const Professions = () => {
    profession().then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const Professions_and_PMI = () => {
    professions_and_PMI().then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const PH_D_since_date = () => {
    Ph_D_since_date().then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const Working_for_and_PMI = () => {
    working_for_and_PMI().then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const Profession_and_PMI = () => {
    profession_and_PMI().then((info) => {
        console.log(info)
        if (info) Chart(info);
        else return null;
    });
}

export const SimilarNodes = (nodeName, type) => {
    similarNodes(nodeName, type).then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const ShortestPath = (id1, id2) => {
    shortestPath(id1, id2).then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const AllShortestPaths = (id1, id2) => {
    allShortestPaths(id1, id2).then((info) => {
        if (info) Chart(info);
        else return null;
    });
}

export const Winner = () => {
    winner().then((info) => {
        if (info) Chart(info);
        else return null;
    });
}
