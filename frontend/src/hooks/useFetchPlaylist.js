import { useQuery } from 'react-query';
import * as apiClient from '../apiClient';

const useFetchPlaylist = (accessToken) => {
  const { data: playlists, isLoading, error } = useQuery(
    ['playlists', accessToken],
    () => apiClient.fetchPlaylists(accessToken),
    {
      enabled: !!accessToken,
      retry: false,
    }
  );

  return {
    playlists,
    loading: isLoading,
    error,
  };
};

export default useFetchPlaylist;
