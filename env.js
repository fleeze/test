/**
 * 部署所属环境dev uat gray product
 * Url 前端访问地址
 * apiUrl  Api访问地址
 * LoginIn  SSO登录地址
 */
(function(root, factory) {
    'use strict'
    if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        root.SYSTEM_CONFIG = factory(root)
    }
}(this, function(root) {
    // const CLIENT_ID = 'App_Key_MagpieBridge_Platform'
    const CLIENT_ID = 'App_Key_MagpieBridge_Platform'
    var host = {
        dev: {
            ApiUrl: 'https://ptcapi-pandora-dev.siyscrm.cn',
        },
        uat: {
            ApiUrl: 'https://ptapi-mbridge-uat.siyscrm.cn',
        },
        gray: {
            ApiUrl: 'https://ptapi-mbridge-uat.siyscrm.cn',
        },
        product: {
            ApiUrl: 'https://pdr-customerapi.wechatgj.cn',
        }
    }
    // 发布请修改此地方
    var config = { type: 'dev', proxy: false }
    host = host[config.type]
    if (config.proxy) {
        host.Proxy = host.ApiUrl
        host.ApiUrl = '/api'
    }
    return host
}))
