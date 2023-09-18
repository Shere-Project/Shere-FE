import { mapService } from '@/api/map';
import { BoldGray9Typography, Gray01Typography } from '@/components/modules/Typography';
import React from 'react';
import { TitleBox } from '../title.style';
import { MainWidthCenterBox } from '@/components/modules/Box';
import Map from '@/components/modules/Map';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Tab, Typography } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { SelectAddress, SelectAddressContainer, ShelterTableContainer } from './find_shelter.style';
import { shelterService, TownShelters } from '@/api/shelter';
import { RoundContainer } from '../home.style';
import { AxiosResponse } from 'axios';
import ShelterTable from '@/components/modules/ShelterTable';

export interface IAdDiv {
  id: number;
  name: string;
}
interface IAddress {
  state: string
  city: string
  town: string
}

const Shelter: React.FC<any> = (props: any): JSX.Element => {
  const [current, setCurrent] = React.useState()
  const [selectedTab, setSelectedTab] = React.useState('earthquake')

  const [states, setStates] = React.useState<Array<IAdDiv>>()
  const [cities, setCities] = React.useState<Array<IAdDiv>>()
  const [towns, setTowns] = React.useState<Array<IAdDiv>>()
  const [address, setAddress] = React.useState<IAddress>({
    state: '',
    city: '',
    town: ''
  })
  const [shelterList, setShelterList] = React.useState<TownShelters>()

  React.useEffect(() => {
    (async () => {
      const currentLatLng = await mapService.getCurrentLatLng()
      setCurrent(currentLatLng)

      const sidos = await mapService.getSiDos()
      setStates(sidos.data.content)
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (address.state) {
        const cityResult = await mapService.getSiGunGus(parseInt(address.state))
        setCities(cityResult.data.content)
      };
      if (address.city) {
        const townResult = await mapService.getMyeonDongs(parseInt(address.city))
        setTowns(townResult.data.content)
      };
    })();
  }, [address])

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  const handleChangeAddress = (prop: keyof IAddress) => (event: SelectChangeEvent) => {
    let newAddress = { ...address }
    switch (prop) {
      case 'state':
        newAddress.city = '';
        newAddress.town = '';
        break;
      case 'city':
        newAddress.town = '';
    }
    newAddress[prop] = event.target.value
    setAddress(newAddress)
  };
  const handleClickSearch = (event: React.MouseEvent) => {
    getTownShelter(selectedTab, parseInt(address.town))
  };

  const getTownShelter = async (type: string, townId: number) => {
    let result: AxiosResponse<any, any>;
    switch (type) {
      case 'earthquake':
        result = await shelterService.getEQDong(townId, 1)
        if (result.data) {
          setShelterList(result.data)
        }
        break;
      case 'tsunami':
        result = await shelterService.getTsuDong(townId, 1)
        if (result.data) {
          setShelterList(result.data)
        }
        break;
      case 'civilDefence':
        result = await shelterService.getCDDong(townId, 1)
        if (result.data) {
          setShelterList(result.data)
        }
        break;
    }
  };

  React.useEffect(() => {
    if (address.town) {
      getTownShelter(selectedTab, parseInt(address.town))
    }
  }, [selectedTab])

  return (
    <MainWidthCenterBox>
      <TitleBox>
        <BoldGray9Typography className='title'>
          대피소 확인
        </BoldGray9Typography>
        <Gray01Typography className='desc'>
          시도, 시군구별로 대피소 정보를 조회하실 수 있습니다
        </Gray01Typography>
        <Gray01Typography className='desc'>
          세종특별자치시는 시군구가 없으므로 읍면동에서 조회하시기 바랍니다.
        </Gray01Typography>
        <Gray01Typography className='desc'>
          지도 아이콘을 클릭하시면 지도를 통해 위치를 확인하실 수 있습니다.
        </Gray01Typography>
      </TitleBox>
      {/* <Box> */}
      <TabContext value={selectedTab}>
        <TabList onChange={handleChangeTab} variant='fullWidth'>
          <Tab label='지진' value='earthquake' />
          <Tab label='지진해일' value='tsunami' />
          <Tab label='민방위' value='civilDefence' />
        </TabList>
      </TabContext>
      <RoundContainer my={'1.25rem'}>
        <Map
          current={current}
          type={selectedTab}
          data={shelterList?.content}
        />
      </RoundContainer>
      <SelectAddressContainer>
        <SelectAddress>
          <FormControl>
            <InputLabel>시도 선택</InputLabel>
            <Select
              label='시도 선택'
              value={address.state}
              onChange={handleChangeAddress('state')}>
              {states?.map((state) => (
                <MenuItem key={`state-${state.id}`} value={state.id}>{state.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>시군구 선택</InputLabel>
            <Select
              label='시군구 선택'
              value={address.city}
              onChange={handleChangeAddress('city')}>
              {cities?.map((city) => (
                <MenuItem key={`city-${city.id}`} value={city.id}>{city.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>읍면동 선택</InputLabel>
            <Select
              label='읍면동 선택'
              value={address.town}
              onChange={handleChangeAddress('town')}>
              {towns?.map((town) => (
                <MenuItem key={`town-${town.id}`} value={town.id}>{town.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </SelectAddress>
        <Button
          variant='contained'
          onClick={handleClickSearch}
        >
          검색
        </Button>
      </SelectAddressContainer>
      {shelterList ?
        <ShelterTableContainer>
          <Typography>
            전체 <span className='em'>{shelterList.totalCount}</span>건
          </Typography>
          {shelterList.totalCount != 0 ?
            <ShelterTable
              data={shelterList}
            /> : <>
              해당 지역에는 대피소가 존재하지 않습니다
            </>
          }
        </ShelterTableContainer>
        : null}
      {/* </Box> */}
    </MainWidthCenterBox>
  )
}

export default Shelter;