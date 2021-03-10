package com.autohome.plugincontainer.ui.dialog;

import javax.swing.JComponent;

import com.autohome.plugincontainer.ui.style.GuideSwing;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.DialogWrapper;
import org.jetbrains.annotations.Nullable;


public class GuideDialog extends DialogWrapper {
    private String projectName;
    private GuideSwing guideSwing = new GuideSwing();

    public GuideDialog(@Nullable Project project) {
        super(true);
        setTitle("使用指南");
        this.projectName = project.getName();
        init();
    }

    @Override
    protected DialogStyle getStyle() {
        return DialogStyle.COMPACT;
    }

    @Override
    protected @Nullable JComponent createCenterPanel() {
        return guideSwing.initCenter();
    }

    @Override
    protected JComponent createSouthPanel() {
        return guideSwing.initSouth(this);
    }


}
