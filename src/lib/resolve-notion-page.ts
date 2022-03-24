import { parsePageId } from 'packages/notion-utils'
import { ExtendedRecordMap } from 'packages/notion-types'

import * as acl from 'lib/acl'
import * as types from 'lib/types'
import { pageUrlOverrides, pageUrlAdditions } from 'lib/config'
import { getPage } from 'lib/notion'
import { getSiteMaps } from 'lib/get-site-maps'
import { getSiteForDomain } from 'lib/get-site-for-domain'
import {PageProps} from "lib/types";

export async function resolveNotionPage(domain: string, rawPageId?: string) {
  let site: types.Site | null
  let pageId: string | undefined
  let recordMap: ExtendedRecordMap

  if (rawPageId && rawPageId !== 'index') {
    pageId = parsePageId(rawPageId)

    if (!pageId) {
      // check if the site configuration provides an override of a fallback for
      // the page's URI
      const override =
        pageUrlOverrides[rawPageId] || pageUrlAdditions[rawPageId]

      if (override) {
        pageId = parsePageId(override)
      }
    }

    if (pageId) {
      const resources = await Promise.all([
        getSiteForDomain(domain),
        getPage(pageId)
      ])

      site = resources[0]
      recordMap = resources[1]
    } else {
      // handle mapping of user-friendly canonical page paths to Notion page IDs
      // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
      const siteMaps = await getSiteMaps()
      const siteMap = siteMaps[0]
      pageId = siteMap?.canonicalPageMap[rawPageId]

      if (pageId) {
        // TODO: we're not re-using the site from siteMaps because it is
        // cached aggressively
        // site = await getSiteForDomain(domain)
        // recordMap = siteMap.pageMap[pageId]

        const resources = await Promise.all([
          getSiteForDomain(domain),
          getPage(pageId)
        ])

        site = resources[0]
        recordMap = resources[1]
      } else {
        return {
          error: {
            message: `Not found "${rawPageId}"`,
            statusCode: 404
          }
        }
      }
    }
  } else {
    site = await getSiteForDomain(domain)
    pageId = site?.rootNotionPageId

    console.log(site)
    recordMap = await getPage(pageId!)
  }

  const props = { site, recordMap, pageId }
  return { ...props, ...(await acl.pageAcl(props as PageProps)) }
}
