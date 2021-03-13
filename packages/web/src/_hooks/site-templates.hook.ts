import useSWR from 'swr';
import { config } from '../_config';
import { get } from '../_helpers/make-api-call';

const { api } = config.routes;

export function useSiteTemplates(): any {
  const url = `${api}/site-templates`;
  const pageLength = 4;
  const { data, error } = useSWR(url, get);
  const templates = data?.data;
  const pages = Math.ceil(templates?.length / pageLength);

  return {
    templates,
    pages,
    pageLength,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useSiteTemplate(id: string): any {
  const url = `${api}/site-templates/${id}`;
  const { data, error } = useSWR(url, get);

  return {
    template: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
