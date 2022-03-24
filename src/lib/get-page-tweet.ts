import * as types from 'lib/types'
import { getPageProperty } from 'packages/notion-utils'

export function getPageTweet(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string | null {
  return getPageProperty('Tweet', block, recordMap)
}
