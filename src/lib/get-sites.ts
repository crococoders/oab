import { getSiteForDomain } from 'lib/get-site-for-domain'
import * as config from 'lib/config'
import {Site} from "lib/types";

export async function getSites(): Promise<(Site | null)[]> {
  return [await getSiteForDomain(config.domain)]
}
