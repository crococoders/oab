import * as types from 'lib/types'
import { getPageProperty } from 'packages/notion-utils'

export function getPageDescription(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string | null {
  return getPageProperty('Description', block, recordMap)
}
