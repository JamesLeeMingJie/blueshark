import { axiosInstance } from 'apis';
// import { ADMINRESOURCE } from 'models/const';
import { useQuery } from 'react-query';

// type KeyTypeResource = keyof typeof ADMINRESOURCE;
// type ValueTypeResource = typeof ADMINRESOURCE[KeyTypeResource];

interface IPayload {
  page?: number;
  limit?: number;
  search?: string;
  updateAt?: string;
  expiredAt?: string;
}

const genQueryKey = (name: string) => {
  const key = {
    all: [name] as const,
    lists: () => [...key.all, 'list'] as const,
    list: (filters: any) => [...key.lists(), { filters }] as const,
    details: () => [...key.all, 'detail'] as const,
    detail: (id: number | string) => [...key.details(), id] as const,
    infinites: () => [...key.all, 'infinite'] as const,
    infinite: (filters: any) => [...key.infinites(), { filters }] as const,
  };
  return key;
};

const vehicleKey = genQueryKey('vehicleKey');
export const useGetVehicle = (params?: IPayload) => {
  const _params = {
    page: 1,
    limit: 10,
    ...params,
  };

  return useQuery(
    vehicleKey.list(params),
    async () => {
      try {
        const res = await axiosInstance.get('/vehicle-model', { params: _params });
        return res.data?.data;
      } catch (e) {
        return e;
      }
    },
    {
      enabled: !!params,
      refetchOnMount: 'always',
    },
  );
};
const resourceDetailKey = genQueryKey('vehicleDetailKey');
export const useGetVehicleDetail = (id: number) => {
  return useQuery(
    resourceDetailKey.list(id),
    async () => {
      try {
        const res = await axiosInstance.get(`/vehicle-model/${id}`);
        return res.data?.data;
      } catch (e) {
        return e;
      }
    },
    {
      enabled: !!id,
      refetchOnMount: 'always',
    },
  );
};

export const useGetPlanOption = () => {
  return useQuery(
    vehicleKey.lists(),
    async () => {
      try {
        const res = await axiosInstance.get('/plan-options');
        return res.data?.data;
      } catch (e) {
        return e;
      }
    },
    {
      refetchOnMount: 'always',
    },
  );
};
