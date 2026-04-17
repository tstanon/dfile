/**
 * @file typeless_trial.js
 * @desc Typeless 用户信息响应覆写脚本 (仅修改到期时间)
 */

let body = $response.body;

if (body) {
    try {
        // 将明文 JSON 字符串解析为对象
        let obj = JSON.parse(body);

        // 确保 data 和 roles 字段存在
        if (obj.data && obj.data.roles && obj.data.roles.length > 0) {
            // 根据你的要求：角色保持不变 (依旧是 pro_trial)，只把到期时间改到 2099 年底
            obj.data.roles[0].exp_time = "2099-12-31T23:59:59+00:00";
        }

        // 将修改后的对象重新转回 JSON 字符串
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("Typeless JSON 解析错误: " + e.message);
    }
}

// 覆写响应体并返回
$done({ body });
