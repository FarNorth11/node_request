/*
 * @Author: kalen peichenkai11@gmail.com
 * @Date: 2024-04-29 15:04:53
 * @LastEditors: kalen peichenkai11@gmail.com
 * @LastEditTime: 2024-04-29 18:12:11
 * @FilePath: /node_request/models/optFile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Created by ben on 2019/1/29.
 */

var fs = require('fs');

module.exports={
    //异步读取方法
    readFileAsync:function(path,recall){
        fs.readFile(path,function(error,data){
            if(error){
                console.log('readFileAsync:',error);
                recall(error.toString());
            }else{
                console.log(data.toString());
                //闭包函数
                recall(data);
            }
        });
        console.log('异步方法执行完毕');
    },
    //同步读取方法
    readFileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        console.log(data.toString());
        console.log('同步方法执行完毕');
    },
    //异步写文件
    writeFileAsync:function(path,data,recall){
        fs.writeFile(path,data,function(err){
            if(err){
                throw err;
            }
            recall('写文件成功');
            console.log('It\'s saved!');
        });
    },
    //同步写文件
    writeFileSync:function(path,data){
        fs.writeFile(path,data);
        console.log('同步写文件完成');
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(error,data){
            if(error){
                console.log(error);
                return
            }else{
                console.log('输出文件');
                res.write(data,'binary');
                res.end();
            }
        });
    },
    //自定义异常抛出
    expfun:function(flag){
        if(flag == 0){
            throw  '例外';
        }
        return 'success';
    }


};