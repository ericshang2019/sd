package com.autohome.plugincontainer.ui.style;

import com.autohome.plugincontainer.ui.dialog.GuideDialog;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.ui.components.JBLabel;

import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JEditorPane;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.event.HyperlinkEvent;
import javax.swing.event.HyperlinkListener;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.FlowLayout;

public class GuideSwing {

    private JPanel center = new JPanel();

    private JPanel south = new JPanel(new FlowLayout(FlowLayout.RIGHT));
    private Logger logger = Logger.getInstance(GuideSwing.class);

    public JPanel initCenter() {
        BoxLayout centerLayout = new BoxLayout(center, BoxLayout.X_AXIS);
        center.setLayout(centerLayout);
        center.setBorder(BorderFactory.createMatteBorder(1, 0, 1, 0, Color.lightGray));
        center.setBackground(Color.white);

        JEditorPane descEditorPane = new JEditorPane();
        descEditorPane.setBorder(BorderFactory.createEmptyBorder(0, 0, 0, 0));
        descEditorPane.setBackground(center.getBackground());
        descEditorPane.setContentType("text/html");
        descEditorPane.putClientProperty(JEditorPane.HONOR_DISPLAY_PROPERTIES, Boolean.TRUE);
        descEditorPane.setFont(new JBLabel().getFont());
        descEditorPane.setText("<style class=\"text/css\">\n" +
                "*{\n" +
                "margin:0;\n" +
                "padding:10px 5px 15px 20px;\n" +
                "}\n" +
                "h2{\n" +
                "font-size:20px;\n" +
                "text-align:center;\n" +
                "color:red\n" +
                "}\n" +
                "p{\n" +
                "font-size:12px;\n" +
                "line-height:25px;\n" +
                "text-indent:2em;\n" +
                "}\n" +
                "</style><p>亲爱的工程师：</p>  \n" +
                "<p>借助 DTookit，你可以：</p>  \n" +
                "<p>1：便捷高效的进行<a href=\"\n" +
                "http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/3-2-代码评审.html\" target=\"_blank\" >代码评审</a>，并配合后台管理系统以低成本的方式实现问题记录、问题跟踪、问题统计分析，形成评审闭环</p>  \n" +
                "<p>2：能够对你所写的<a href=\"\n" +
                "http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/3-1-代码片段管理.html\" target=\"_blank\">代码片段进行管理</a>，支持中心化存储，提高你在编程上面的开发效率</p>  \n" +
                "<p>3：支持<a href=\"http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/3-3-接口文档自动生成.html\" target=\"_blank\">yapi文档自动生成</a>，减少录入时间，反向规范代码注释，和代码整洁</p>  \n" +
                "<p>4：还可以<a href=\"http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/3-4-sql脚本规范检查.html\" target=\"_blank\">sql脚本规范检查</a>，自动发现问题sql</p>  \n" +
                "\n" +
                "\n" +
                "<p><a href=\"http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/3-0-使用指南.html\" target=\"_blank\">《DTookit使用指南》</a>  &nbsp;&nbsp;&nbsp;&nbsp; <a href=\"http://developer.autohome.com.cn/dealer-resource/bwdlr/idea插件统一技术项目/9-1-交流群.html\" target=\"_blank\">DTookit 交流群</a>\n" +
                "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  DTookit项目组</p> \n" +
                "\n" +
                "<hr>\n" +
                "<p>手动打开该指引：DTookit-使用指南</p>  ");
        descEditorPane.setAlignmentX(Component.LEFT_ALIGNMENT);
        descEditorPane.setPreferredSize(new Dimension(750, 430));
        descEditorPane.setEditable(false);
        center.add(descEditorPane);

        descEditorPane.addHyperlinkListener(new HyperlinkListener() {
            public void hyperlinkUpdate(HyperlinkEvent e) {
                if (e.getEventType() == HyperlinkEvent.EventType.ACTIVATED) {
                    try {
                        String command = "explorer.exe "
                                + e.getURL().toString();
                        Runtime.getRuntime().exec(command);
                    } catch (Exception ex) {
                        logger.error(String.format("URL【%s】打开异常", e.getURL().toString()), ex);
                    }
                }
            }
        });

        return center;
    }

    public JPanel initSouth(GuideDialog guideDialog) {
        south.setAlignmentX(Component.RIGHT_ALIGNMENT);
        JButton submit = new JButton("确定");
        submit.setHorizontalAlignment(SwingConstants.CENTER);
        submit.setVerticalAlignment(SwingConstants.CENTER);
        south.add(submit);

        //按钮事件绑定
        submit.addActionListener(e -> {
            guideDialog.close(0);
        });
        return south;
    }
}
