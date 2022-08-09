import { useState } from 'react';

import {
  useAddCountryMutation,
  useDeteleCountryMutation,
  useEditCountryMutation,
  useGetCountriesQuery,
  useAddRegionMutation,
  useDeleteRegionMutation,
  useEditRegionMutation,
  useGetRegionsQuery,
  useAddCityMutation,
  useDeleteCityMutation,
  useEditCityMutation,
  useGetCitiesQuery
} from '../app/api';

import { notification } from '../utils/notification';
import defaulCountry from '../constants/defaultCountry';
import defaultCity from '../constants/defaultCity';
import defaultRegion from '../constants/defaultRegion';

const useRegions = () => {
  const [openRegions, setOpenRegions] = useState(false);
  const [openCountries, setOpenCountries] = useState(false);
  const [openCities, setOpenCities] = useState(false);
  const [activeDataRegion, setActiveDataRegion] = useState(defaultRegion);
  const [activeDataCountry, setActiveDataCountry] = useState(defaulCountry);
  const [activeDataCity, setActiveDataCity] = useState(defaultCity);

  const { data: regions, isError: isErrorRegions, isLoading: isLoadingRegions } = useGetRegionsQuery();
  const [addRegion] = useAddRegionMutation();
  const [editRegion] = useEditRegionMutation();
  const [deleteRegion] = useDeleteRegionMutation();

  const { data: countries, isError: isErrorCountries, isLoading: isLoadingCountries } = useGetCountriesQuery();
  const [addCountry] = useAddCountryMutation();
  const [editCountry] = useEditCountryMutation();
  const [deleteCountry] = useDeteleCountryMutation();

  const { data: cities, isError: isErrorCities, isLoading: isLoadingCities } = useGetCitiesQuery();
  const [addCity] = useAddCityMutation();
  const [editCity] = useEditCityMutation();
  const [deleteCity] = useDeleteCityMutation();

  const handleOpenRegions = (region) => {
    setActiveDataRegion(region);
    setOpenRegions(true);
  };

  const handleOpenCountries = (country) => {
    setActiveDataCountry(country);
    setOpenCountries(true);
  };

  const handleOpenCities = (city) => {
    setActiveDataCity(city);
    setOpenCities(true);
  };

  const handleClose = () => {
    setOpenRegions(false);
    setOpenCountries(false);
    setOpenCities(false);
    setActiveDataRegion(defaultRegion);
    setActiveDataCountry(defaulCountry);
    setActiveDataCity(defaultCity);
  };

  const handleAddRegion = async (region) => {
    const message = 'Región creada con éxito';
    const result = await addRegion(region);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleEditRegion = async (region) => {
    const message = 'Región creada con éxito';
    const result = await editRegion(region);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleDeleteRegion = async (id) => {
    await deleteRegion(id);
  };

  const handleAddCountry = async (country) => {
    const message = 'País creado con éxito';
    const result = await addCountry(country);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleEditCountry = async (country) => {
    const message = 'País creado con éxito';
    const result = await editCountry(country);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleDeleteCountry = async (id) => {
    await deleteCountry(id);
  };

  const handleAddCity = async (city) => {
    const message = 'Ciudad creada con éxito';
    const result = await addCity(city);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleEditCity = async (city) => {
    const message = 'Ciudad editada con éxito';
    const result = await editCity(city);
    if ('error' in result) {
      console.log(result);
      notification('error', result.error.data.message);
    } else {
      notification('success', message);
    }
  };

  const handleDeleteCity = async (id) => {
    await deleteCity(id);
  };

  return {
    handleClose,

    activeDataRegion,
    regions,
    isErrorRegions,
    isLoadingRegions,
    handleAddRegion,
    handleEditRegion,
    handleDeleteRegion,
    openRegions,
    handleOpenRegions,

    activeDataCountry,
    countries,
    isErrorCountries,
    isLoadingCountries,
    handleAddCountry,
    handleEditCountry,
    handleDeleteCountry,
    openCountries,
    handleOpenCountries,

    activeDataCity,
    cities,
    isErrorCities,
    isLoadingCities,
    handleAddCity,
    handleEditCity,
    handleDeleteCity,
    openCities,
    handleOpenCities
  };
};

export default useRegions;
