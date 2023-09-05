import { axiosInstance } from 'apis';
import { ADMINRESOURCE, SEARCHBY } from 'models/const';
import { useInfiniteQuery, useQuery } from 'react-query';

type KeyTypeResource = keyof typeof ADMINRESOURCE;
type ValueTypeResource = typeof ADMINRESOURCE[KeyTypeResource];

type KeyTypeSearchBy = keyof typeof SEARCHBY;
type ValueTypeSearchBy = typeof SEARCHBY[KeyTypeSearchBy];

interface IPayload {
  type: ValueTypeResource;
  page?: number;
  limit?: number;
  search?: string;
  searchBy?: ValueTypeSearchBy;
  updateAt?: string;
  expiredAt?: string;
}

interface IPlayloadContact {
  customerName: string;
  email: string;
  message: string;
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

export const postContact = async (payload: IPlayloadContact) => {
  const response = await axiosInstance.post('/contact-us', payload);
  return response.data.data;
};

const resourceKey = genQueryKey('resourceKey');
export const useGetResource = (params?: IPayload) => {
  const _params = {
    page: 1,
    limit: 10,
    ...params,
  };

  return useQuery(
    resourceKey.list(params),
    async () => {
      try {
        const res = await axiosInstance.get('/resource', { params: _params });
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

const resourceDetailKey = genQueryKey('resourceDetailKey');
export const useGetResourceDetail = (id: number) => {
  return useQuery(
    resourceDetailKey.list(id),
    async () => {
      try {
        const res = await axiosInstance.get(`/resource/detail/${id}`);
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

export const useGetResourceInfinite = ({ type = 'FAQ', limit = 10 }: Pick<IPayload, 'type' | 'limit'>) => {
  return useInfiniteQuery(
    ['resourceInfiniteKey', type],
    async ({ pageParam = 1 }) => {
      try {
        const payload = {
          page: pageParam,
          limit,
          type,
        };

        const res = await axiosInstance.get('/resource', { params: payload });
        return res.data?.data;
      } catch (e) {
        return e;
      }
    },
    {
      refetchOnMount: 'always',
      getNextPageParam: (lastPage, pages) => {
        if (pages?.length < 10) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    },
  );
};
