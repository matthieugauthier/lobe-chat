import { useMemo } from 'react';




import { ProviderItem } from '../type';
import { useBedrockProvider } from './Bedrock';

export const useProviderList = (): ProviderItem[] => {
  const BedrockProvider = useBedrockProvider();

  return useMemo(() => [BedrockProvider], [BedrockProvider]);
};
