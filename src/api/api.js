import * as api from '../assets/request'
import conf from '@/comfig/index'

var basePath = conf.baseUrl

/**
 * 查询
 * @param listQuery
 * @returns {Promise<unknown>}
 */
export function getQuery(listQuery) {
    return api.post(basePath + "carLogistics/list", listQuery);
}