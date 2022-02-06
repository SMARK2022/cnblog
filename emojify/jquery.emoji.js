/**
 * Created by Sky on 2015/12/11.
 * Edited by SMARK on 2022/02/05.
 */

var emojiLists = [{ name: "Bilibili小电视", path: "/bilibilitv/", file: ".gif", placeholder: "∫tv‖{alias}‖", emoji: { "白眼": "tvgif-白眼", "doge": "tvgif-doge", "坏笑": "tvgif-坏笑", "难过": "tvgif-难过", "生气": "tvgif-生气", "委屈": "tvgif-委屈", "斜眼笑": "tvgif-斜眼笑", "呆": "tvgif-呆", "发怒": "tvgif-发怒", "惊吓": "tvgif-惊吓", "呕吐": "tvgif-呕吐", "思考": "tvgif-思考", "微笑": "tvgif-微笑", "疑问": "tvgif-疑问", "大哭": "tvgif-大哭", "鼓掌": "tvgif-鼓掌", "抠鼻": "tvgif-抠鼻", "亲亲": "tvgif-亲亲", "调皮": "tvgif-调皮", "笑哭": "tvgif-笑哭", "晕": "tvgif-晕", "点赞": "tvgif-点赞", "害羞": "tvgif-害羞", "睡着": "tvgif-睡着", "色": "tvgif-色", "吐血": "tvgif-吐血", "无奈": "tvgif-无奈", "再见": "tvgif-再见", "流汗": "tvgif-流汗", "偷笑": "tvgif-偷笑", "抓狂": "tvgif-抓狂", "黑人问号": "tvgif-黑人问号", "困": "tvgif-困", "打脸": "tvgif-打脸", "闭嘴": "tvgif-闭嘴", "鄙视": "tvgif-鄙视", "腼腆": "tvgif-腼腆", "馋": "tvgif-馋", "可爱": "tvgif-可爱", "发财": "tvgif-发财", "生病": "tvgif-生病", "流鼻血": "tvgif-流鼻血", "尴尬": "tvgif-尴尬", "大佬": "tvgif-大佬" } }, { name: "热词系列", path: "/hot/", file: ".png", placeholder: "∫hot‖{alias}‖", emoji: { "知识增加": "热词系列-知识增加", "知识增加-虎年": "热词系列-知识增加-虎年", "知识增加-圣诞": "热词系列-知识增加-圣诞", "知识增加-春节": "热词系列-知识增加-春节", "知识增加-愚人节": "热词系列-知识增加-愚人节", "扬名立万": "热词系列-扬名立万", "红红火火": "热词系列-红红火火", "新年快乐": "热词系列-新年快乐", "新年快乐-旧": "热词系列-新年快乐-旧", "你币有了": "热词系列-你币有了", "你币有了-春节": "热词系列-你币有了-春节", "吹爆": "热词系列-吹爆", "吹爆-春节": "热词系列-吹爆-春节", "好耶": "热词系列-好耶", "好耶-春节": "热词系列-好耶-春节", "秀": "热词系列-秀", "秀-春节": "热词系列-秀-春节", "妙啊": "热词系列-妙啊", "妙啊-春节": "热词系列-妙啊-春节", "恭喜发财": "热词系列-恭喜发财", "大吉大利": "热词系列-大吉大利", "身体健康": "热词系列-身体健康", "吃嘛嘛香": "热词系列-吃嘛嘛香", "绝不挂科": "热词系列-绝不挂科", "上岸成功": "热词系列-上岸成功", "蒙的全对": "热词系列-蒙的全对", "升职加薪": "热词系列-升职加薪", "早日脱单": "热词系列-早日脱单", "助力梦想": "热词系列-助力梦想", "好人卡": "热词系列-好人卡", "B站有房": "热词系列-B站有房", "破防了": "热词系列-破防了", "破防了-旧": "热词系列-破防了-旧", "多谢款待": "热词系列-多谢款待", "燃起来了": "热词系列-燃起来了", "燃起来了-旧": "热词系列-燃起来了-旧", "仙人指路": "热词系列-仙人指路", "饮茶先啦": "热词系列-饮茶先啦", "再来亿遍": "热词系列-再来亿遍", "热乎": "热词系列-热乎", "好活": "热词系列-好活", "排面": "热词系列-排面", "爷青回": "热词系列-爷青回", "好家伙": "热词系列-好家伙", "芜湖起飞": "热词系列-芜湖起飞", "夺笋呐": "热词系列-夺笋呐", "两面包夹芝士": "热词系列-两面包夹芝士", "梦幻联动": "热词系列-梦幻联动", "泪目": "热词系列-泪目", "保护": "热词系列-保护", "爱了爱了": "热词系列-爱了爱了", "三连": "热词系列-三连", "可以": "热词系列-可以", "希望没事": "热词系列-希望没事", "打卡": "热词系列-打卡", "DNA": "热词系列-DNA", "这次一定": "热词系列-这次一定", "AWSL": "热词系列-AWSL", "递话筒": "热词系列-递话筒", "你细品": "热词系列-你细品", "咕咕": "热词系列-咕咕", "标准结局": "热词系列-标准结局", "张三": "热词系列-张三", "害": "热词系列-害", "我裂开了": "热词系列-我裂开了", "有内味了": "热词系列-有内味了", "猛男必看": "热词系列-猛男必看", "猛男必看-旧": "热词系列-猛男必看-旧", "奥力给": "热词系列-奥力给", "问号": "热词系列-问号", "我哭了": "热词系列-我哭了", "高产": "热词系列-高产", "不愧是你": "热词系列-不愧是你", "真香": "热词系列-真香", "我全都要": "热词系列-我全都要", "神仙UP": "热词系列-神仙UP", "锤": "热词系列-锤", "爷关更": "热词系列-爷关更", "我酸了": "热词系列-我酸了", "有生之年": "热词系列-有生之年", "镇站之宝": "热词系列-镇站之宝", "我太南了": "热词系列-我太南了", "对象": "热词系列-对象", "完结撒花": "热词系列-完结撒花", "大师球": "热词系列-大师球", "知识盲区": "热词系列-知识盲区", "“狼火”": "热词系列-“狼火”", "你可真星": "热词系列-你可真星", "YYDS": "热词系列-YYDS", "入站必刷": "热词系列-入站必刷", "热门通知": "热词系列-热门通知", "献上膝盖": "热词系列-献上膝盖", "住在B站": "热词系列-住在B站", "365": "热词系列-365", "最美的夜": "热词系列-最美的夜", "干杯": "热词系列-干杯", "2022新年": "热词系列-2022新年", "奇幻时空": "热词系列-奇幻时空", "魔幻时空": "热词系列-魔幻时空", "EDG": "热词系列-EDG", "我们是冠军": "热词系列-我们是冠军", "花好月圆": "热词系列-花好月圆", "中秋快乐": "热词系列-中秋快乐", "谢谢老师": "热词系列-谢谢老师", "不孤鸟": "热词系列-不孤鸟", "害怕": "热词系列-害怕", "危": "热词系列-危", "端午安康": "热词系列-端午安康", "下次一定": "热词系列-下次一定", "battle": "热词系列-battle", "skr": "热词系列-skr", "河南加油": "热词系列-河南加油", "豫你一起": "热词系列-豫你一起" } }, { name: "QQ", path: "/qq/", file: ".gif", placeholder: "∫qq‖{alias}‖", emoji: { "微笑": "微笑", "撇嘴": "撇嘴", "色": "色", "发呆": "发呆", "得意": "得意", "流泪": "流泪", "害羞": "害羞", "闭嘴": "闭嘴", "睡": "睡", "大哭": "大哭", "尴尬": "尴尬", "呲牙": "呲牙", "发怒": "发怒", "调皮": "调皮", "惊讶": "惊讶", "难过": "难过", "酷": "酷", "冷汗": "冷汗", "抓狂": "抓狂", "吐": "吐", "偷笑": "偷笑", "可爱": "可爱", "白眼": "白眼", "傲慢": "傲慢", "饥饿": "饥饿", "困": "困", "惊恐": "惊恐", "流汗": "流汗", "憨笑": "憨笑", "大兵": "大兵", "奋斗": "奋斗", "咒骂": "咒骂", "疑问": "疑问", "嘘": "嘘", "晕": "晕", "折磨": "折磨", "衰": "衰", "骷髅": "骷髅", "敲打": "敲打", "再见": "再见", "擦汗": "擦汗", "抠鼻": "抠鼻", "鼓掌": "鼓掌", "嗅大了": "嗅大了", "坏笑": "坏笑", "左哼哼": "左哼哼", "右哼哼": "右哼哼", "哈欠": "哈欠", "鄙视": "鄙视", "委屈": "委屈", "可怜": "可怜", "阴险": "阴险", "亲亲": "亲亲", "吓": "吓", "快哭了": "快哭了", "菜刀": "菜刀", "西瓜": "西瓜", "啤酒": "啤酒", "篮球": "篮球", "乒乓": "乒乓", "咖啡": "咖啡", "饭": "饭", "猪头": "猪头", "玫瑰": "玫瑰", "凋谢": "凋谢", "心": "心", "心碎": "心碎", "蛋糕": "蛋糕", "闪电": "闪电", "炸弹": "炸弹", "刀": "刀", "足球": "足球", "瓢虫": "瓢虫", "便便": "便便", "夜晚": "夜晚", "太阳": "太阳", "礼物": "礼物", "拥抱": "拥抱", "强": "强", "弱": "弱", "握手": "握手", "胜利": "胜利", "抱拳": "抱拳", "勾引": "勾引", "拳头": "拳头", "差劲": "差劲", "爱你": "爱你", "NO": "NO", "OK": "OK", "爱情": "爱情", "飞吻": "飞吻", "发财": "发财", "帅": "帅", "雨伞": "雨伞", "高铁左车头": "高铁左车头", "车厢": "车厢", "高铁右车头": "高铁右车头", "纸巾": "纸巾", "右太极": "右太极", "左太极": "左太极", "献吻": "献吻", "街舞": "街舞", "激动": "激动", "挥动": "挥动", "跳绳": "跳绳", "回头": "回头", "磕头": "磕头", "转圈": "转圈", "怄火": "怄火", "发抖": "发抖", "跳跳": "跳跳", "爆筋": "爆筋", "沙发": "沙发", "钱": "钱", "蜡烛": "蜡烛", "枪": "枪", "灯": "灯", "香蕉": "香蕉", "吻": "吻", "下雨": "下雨", "闹钟": "闹钟", "囍": "囍", "棒棒糖": "棒棒糖", "面条": "面条", "车": "车", "邮件": "邮件", "风车": "风车", "药丸": "药丸", "奶瓶": "奶瓶", "灯笼": "灯笼", "青蛙": "青蛙", "戒指": "戒指", "K歌": "K歌", "熊猫": "熊猫", "喝彩": "喝彩", "购物": "购物", "多云": "多云", "鞭炮": "鞭炮", "飞机": "飞机", "气球": "气球" } }, { name: "贴吧", path: "/tieba/", file: ".png", placeholder: "∫tieba‖{alias}‖", emoji: { "呵呵": "呵呵", "哈哈": "哈哈", "吐舌": "吐舌", "太开心": "太开心", "笑眼": "笑眼", "花心": "花心", "小乖": "小乖", "乖": "乖", "捂嘴笑": "捂嘴笑", "滑稽": "滑稽", "你懂的": "你懂的", "不高兴": "不高兴", "怒": "怒", "汗": "汗", "黑线": "黑线", "泪": "泪", "真棒": "真棒", "喷": "喷", "惊哭": "惊哭", "阴险": "阴险", "鄙视": "鄙视", "酷": "酷", "啊": "啊", "狂汗": "狂汗", "what": "what", "疑问": "疑问", "酸爽": "酸爽", "呀咩爹": "呀咩爹", "委屈": "委屈", "惊讶": "惊讶", "睡觉": "睡觉", "笑尿": "笑尿", "挖鼻": "挖鼻", "吐": "吐", "犀利": "犀利", "小红脸": "小红脸", "懒得理": "懒得理", "勉强": "勉强", "爱心": "爱心", "心碎": "心碎", "玫瑰": "玫瑰", "礼物": "礼物", "彩虹": "彩虹", "太阳": "太阳", "星星月亮": "星星月亮", "钱币": "钱币", "茶杯": "茶杯", "蛋糕": "蛋糕", "大拇指": "大拇指", "胜利": "胜利", "haha": "haha", "OK": "OK", "沙发": "沙发", "手纸": "手纸", "香蕉": "香蕉", "便便": "便便", "药丸": "药丸", "红领巾": "红领巾", "蜡烛": "蜡烛", "音乐": "音乐", "灯泡": "灯泡", } }];

(function ($, window, document) {

    var PLUGIN_NAME = 'emoji',
        VERSION = '1.1.1',
        DEFAULTS = {
            showTab: true,
            animation: 'fade',
            icons: []
        };

    window.emoji_index = 0;

    function Plugin(element, options) {
        this.$content = $(element);
        this.options = options;
        this.index = emoji_index;
        switch (options.animation) {
            case 'none':
                this.showFunc = 'show';
                this.hideFunc = 'hide';
                this.toggleFunc = 'toggle';
                break;
            case 'slide':
                this.showFunc = 'slideDown';
                this.hideFunc = 'slideUp';
                this.toggleFunc = 'slideToggle';
                break;
            case 'fade':
                this.showFunc = 'fadeIn';
                this.hideFunc = 'fadeOut';
                this.toggleFunc = 'fadeToggle';
                break;
            default:
                this.showFunc = 'fadeIn';
                this.hideFunc = 'fadeOut';
                this.toggleFunc = 'fadeToggle';
                break;
        }
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var that = this;
            var btn = this.options.button;
            var newBtn;
            var ix = that.index;
            if (!btn) {
                newBtn = '<input type="image" class="emoji_btn" id="emoji_btn_' + ix + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUxpcfTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAOfx6yUAAAALdFJOUwAzbVQOoYrzwdwkAoU+0gAAAM1JREFUGNN9kK0PQWEUxl8fM24iCYopwi0muuVuzGyKwATFZpJIU01RUG/RBMnHxfz+Oef9uNM84d1+23nO+zxHKVG2WWupRJkdcAwtpCK0lpbqWE01pB0QayonREMoIp7AawQrWSgGGb4pn6dSeSh68FAVXqHqy3wKrkJiDGDTg3dnp//w+WnwlwIOJauF+C7sXRVfdha4O4oIJfTbtdSxs2uqhs585A0ko8iLTMEcDE1n65A+29pYAlr72nz9dKu7GuNTcsL2fDQzB/wCPVJ69nZGb3gAAAAASUVORK5CYII="/>';
                $(newBtn).appendTo($('.commentbox_footer'));
                btn = '#emoji_btn_' + ix;
            }

            var showTab = this.options.showTab;
            var basePath = this.options.basePath;
            var iconsGroup = this.options.icons;
            var groupLength = iconsGroup.length;
            if (groupLength === 0) {
                console.error('表情图路径读取失败');
                return false;
            }

            var emoji_container = '<div class="emoji_container" id="emoji_container_' + ix + '">';
            var emoji_content = '<div class="emoji_content">';
            var emoji_tab = '<div class="emoji_tab" style="' + (groupLength === 1 && !showTab ? 'display:none;' : '') + '"><div class="emoji_tab_prev"></div><div class="emoji_tab_list"><ul>';
            var panel,
                name,
                path,
                maxNum,
                excludeNums,
                file,
                placeholder,
                emoji,
                index,
                notation;
            for (var i = 0; i < groupLength; i++) {
                name = iconsGroup[i].name || 'group' + (i + 1);
                path = basePath + '/' + iconsGroup[i].path;
                maxNum = iconsGroup[i].maxNum;  // 表情最大数
                excludeNums = iconsGroup[i].excludeNums;    // 要排除的
                file = iconsGroup[i].file || '.jpg';
                placeholder = iconsGroup[i].placeholder || '#em' + (i + 1) + '_{alias}#';
                emoji = iconsGroup[i].emoji;    // 表情数据列表 [显示名:文件名]
                index = 0;
                if (!path) {
                    console.error('第 ' + i + ' 组表情未配置图片路径 path');
                    continue;
                }

                panel = '<div id="emoji' + i + '" class="emoji_icons" style="' + (i === 0 ? '' : 'display:none;') + '"><ul>';

                if (emoji) {    // 指定了emoji 数组
                    if (typeof emoji !== 'object') {
                        console.error('第 ' + i + ' 组 emoji 参数设置不正确');
                        break;
                    }

                    maxNum = maxNum || emoji.length;

                    // 循环添加表情
                    for (var tmp in emoji) {
                        index++;

                        if (index > maxNum || (excludeNums && excludeNums.indexOf(index) >= 0)) {
                            continue;  // 排除要排除的表情
                        }

                        notation = placeholder.replace(new RegExp('{alias}', 'gi'), tmp.toString());
                        panel += '<li><a data-emoji_code="' + notation + '" data-index="' + index + '" title="' + tmp +
                            '"><img class="wp-smiley" src="' + path + emoji[tmp] + file + '"/></a></li>';
                    }


                } else {
                    if (!maxNum) {
                        console.error('请指定 ' + i + ' 组表情 maxNum');
                        continue;
                    }

                    for (var j = 1; j <= maxNum; j++) {

                        if (excludeNums && excludeNums.indexOf(j) >= 0) {
                            continue;  // 排除要排除的表情
                        }

                        notation = placeholder.replace(new RegExp('{alias}', 'gi'), j.toString());
                        panel += '<li><a data-emoji_code="' + notation + '" data-index="' + j + '"><img src="' + path + j + file + '"/></a></li>';
                    }
                }


                panel += '</ul></div>';
                emoji_content += panel;
                emoji_tab += '<li data-emoji_tab="emoji' + i + '" class="' + (i === 0 ? 'selected' : '') + '" title="' + name + '">' + name + '</li>';
            }
            emoji_content += '</div>';
            emoji_tab += '</ul></div><div class="emoji_tab_next"></div></div>';
            var emoji_preview = '<div class="emoji_preview"><img/></div>';
            emoji_container += emoji_content;
            emoji_container += emoji_tab;
            emoji_container += emoji_preview;

            $(emoji_container).appendTo($('.commentbox_footer'));

            $('#emoji_container_' + ix).css({ 'margin-left': '25px', 'z-index': '999' });



            var pageCount = groupLength % 8 === 0 ? parseInt(groupLength / 8) : parseInt(groupLength / 8) + 1;
            var pageIndex = 1;
            $(document).on({
                'click': function (e) {
                    var target = e.target;
                    var field = that.$content[0];
                    var code,
                        tab,
                        imgSrc,
                        insertHtml;
                    if (target === $(btn)[0]) {
                        $('#emoji_container_' + ix)[that.toggleFunc]();
                        // that.$content.focus();
                    } else if ($(target).parents('#emoji_container_' + ix).length > 0) {
                        code = $(target).data('emoji_code') || $(target).parent().data('emoji_code');
                        tab = $(target).data('emoji_tab');
                        if (code) {
                            if (field.nodeName === 'DIV') {
                                imgSrc = $('#emoji_container_' + ix + ' a[data-emoji_code="' + code + '"] img').attr('src');
                                insertHtml = '<img class="emoji_icon" src="' + imgSrc + '"/>';
                                that._insertAtCursor(field, insertHtml, false);
                            } else {
                                that._insertAtCursor(field, code);
                            }
                            that.hide();
                            that.$content.focus();
                        }
                        else if (tab) {
                            if (!$(target).hasClass('selected')) {
                                $('#emoji_container_' + ix + ' .emoji_icons').hide();
                                $('#emoji_container_' + ix + ' #' + tab).show();
                                $(target).addClass('selected').siblings().removeClass('selected');
                            }
                        } else if ($(target).hasClass('emoji_tab_prev')) {
                            if (pageIndex > 1) {
                                $('#emoji_container_' + ix + ' .emoji_tab_list ul').css('margin-left', ('-503' * (pageIndex - 2)) + 'px');
                                pageIndex--;
                            }

                        } else if ($(target).hasClass('emoji_tab_next')) {
                            if (pageIndex < pageCount) {
                                $('#emoji_container_' + ix + ' .emoji_tab_list ul').css('margin-left', ('-503' * pageIndex) + 'px');
                                pageIndex++;
                            }
                        }
                        // that.$content.focus();
                    } else if ($('#emoji_container_' + ix + ':visible').length > 0) {
                        that.hide();
                        that.$content.focus();
                    }
                }
            });

            $('#emoji_container_' + ix + ' .emoji_icons a').mouseenter(function () {
                if (($(this).offset().left - $('#emoji_container_' + ix).offset().left) * 2 < $('#emoji_container_' + ix).width()) {
                    $('#emoji_container_' + ix + ' .emoji_preview').css({ 'left': 'auto', 'right': 0 });
                } else {
                    $('#emoji_container_' + ix + ' .emoji_preview').css({ 'left': 0, 'right': 'auto' });
                }
                var src = $(this).find('img').attr('src');
                $('#emoji_container_' + ix + ' .emoji_preview img').attr('src', src).parent().show();
            });

            $('#emoji_container_' + ix + ' .emoji_icons a').mouseleave(function () {
                $('#emoji_container_' + ix + ' .emoji_preview img').removeAttr('src').parent().hide();
            });


        },

        _insertAtCursor: function (field, value, selectPastedContent) {
            var sel, range;
            if (field.nodeName === 'DIV') {
                field.focus();
                if (window.getSelection) {
                    sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        range = sel.getRangeAt(0);
                        range.deleteContents();
                        var el = document.createElement('div');
                        el.innerHTML = value;
                        var frag = document.createDocumentFragment(), node, lastNode;
                        while ((node = el.firstChild)) {
                            lastNode = frag.appendChild(node);
                        }
                        var firstNode = frag.firstChild;
                        range.insertNode(frag);

                        if (lastNode) {
                            range = range.cloneRange();
                            range.setStartAfter(lastNode);
                            if (selectPastedContent) {
                                range.setStartBefore(firstNode);
                            } else {
                                range.collapse(true);
                            }
                            sel.removeAllRanges();
                            sel.addRange(range);
                        }
                    }
                } else if ((sel = document.selection) && sel.type !== 'Control') {
                    var originalRange = sel.createRange();
                    originalRange.collapse(true);
                    sel.createRange().pasteHTML(html);
                    if (selectPastedContent) {
                        range = sel.createRange();
                        range.setEndPoint('StartToStart', originalRange);
                        range.select();
                    }
                }
            } else {
                if (document.selection) {
                    field.focus();
                    sel = document.selection.createRange();
                    sel.text = value;
                    sel.select();
                }
                else if (field.selectionStart || field.selectionStart === 0) {
                    var startPos = field.selectionStart;
                    var endPos = field.selectionEnd;
                    var restoreTop = field.scrollTop;
                    field.value = field.value.substring(0, startPos) + value + field.value.substring(endPos, field.value.length);
                    if (restoreTop > 0) {
                        field.scrollTop = restoreTop;
                    }
                    field.focus();
                    field.selectionStart = startPos + value.length;
                    field.selectionEnd = startPos + value.length;
                } else {
                    field.value += value;
                    field.focus();
                }
            }

        },

        show: function () {
            $('#emoji_container_' + this.index)[this.showFunc]();
        },

        hide: function () {
            $('#emoji_container_' + this.index)[this.hideFunc]();
        },

        toggle: function () {
            $('#emoji_container_' + this.index)[this.toggleFunc]();
        }
    };

    function fn(option) {
        emoji_index++;
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('plugin_' + PLUGIN_NAME + emoji_index);
            var options = $.extend({}, DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) $this.data('plugin_' + PLUGIN_NAME + emoji_index, (data = new Plugin(this, options)));
            if (typeof option === 'string') data[option]();
        });
    }

    $.fn[PLUGIN_NAME] = fn;
    $.fn[PLUGIN_NAME].Constructor = Plugin;

}(jQuery, window, document));

(function ($, window, document) {

    var PLUGIN_NAME = 'emojiParse',
        VERSION = '1.1.1',
        DEFAULTS = {
            icons: []
        };

    function Plugin(element, options) {
        this.$content = $(element);
        this.options = options;
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var that = this;
            var iconsGroup = this.options.icons;
            var basePath = this.options.basePath;
            var groupLength = iconsGroup.length;
            var path,
                file,
                placeholder,
                emoji,
                pattern,
                regexp;
            if (groupLength > 0) {

                for (var i = 0; i < groupLength; i++) {
                    path = basePath + '/' + iconsGroup[i].path;
                    file = iconsGroup[i].file || '.jpg';
                    placeholder = iconsGroup[i].placeholder;
                    placeholder = placeholder.replace('[', '\\[');
                    placeholder = placeholder.replace(']', '\\]');
                    placeholder = placeholder.replace('(', '\\(');
                    placeholder = placeholder.replace(')', '\\)');

                    emoji = iconsGroup[i].emoji;
                    if (!path) {
                        console.error('第 ' + i + ' 组表情未配置图片路径 path');
                        continue;
                    }

                    if (emoji) {

                        if (typeof emoji !== 'object') {
                            console.error('第 ' + i + ' 组 emoji 参数设置不正确');
                            break;
                        }

                        pattern = placeholder.replace(new RegExp('{alias}', 'gi'), '([\\s\\S]+?)');

                        regexp = new RegExp(pattern, 'gm');
                        that.$content.html(that.$content.html().replace(regexp, function ($0, $1) {
                            var n = emoji[$1];
                            if (n) {
                                return '<img class="wp-smiley" src="' + path + n + file + '" title="' + $1 + '" alt="' + $1 + '"/>';
                            } else {
                                return $0;
                            }
                        }));
                    } else {
                        pattern = placeholder.replace(new RegExp('{alias}', 'gi'), '(\\d+?)');
                        that.$content.html(that.$content.html().replace(new RegExp(pattern, 'gm'), '<img class="wp-smiley" src="' + path + '$1' + file + '"/>'));
                    }

                }
            }
        }
    };

    function fn(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('plugin_' + PLUGIN_NAME);
            var options = $.extend({}, DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) $this.data('plugin_' + PLUGIN_NAME, (data = new Plugin(this, options)));
            if (typeof option === 'string') data[option]();
        });
    }

    $.fn[PLUGIN_NAME] = fn;
    $.fn[PLUGIN_NAME].Constructor = Plugin;

}(jQuery, window, document));



function f() {
    $("#post_detail").emojiParse({
        basePath: 'https://cdn.jsdelivr.net/gh/SMARK2022/imgbase/emoji',
        icons: emojiLists
    });
    $("#blog-comments-placeholder").emojiParse({
        basePath: 'https://cdn.jsdelivr.net/gh/SMARK2022/imgbase/emoji',
        icons: emojiLists
    });
    $("#tbCommentBody").emoji({
        showTab: false,
        animation: 'slide',
        basePath: 'https://cdn.jsdelivr.net/gh/SMARK2022/imgbase/emoji',
        icons: emojiLists   // 注：详见 js/emoji.list.js
    });
    //$("#emoji_btn_1").click(function () {
    //    $("#tbCommentBody").emojiParse({
    //        basePath: 'https://cdn.jsdelivr.net/gh/SMARK2022/imgbase/emoji',
    //        icons: emojiLists
    //    });
    //});
}

setTimeout(f(), 3000 )
