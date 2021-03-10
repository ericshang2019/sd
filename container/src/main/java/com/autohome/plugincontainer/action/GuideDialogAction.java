package com.autohome.plugincontainer.action;

        // import com.autohome.plugincontainer.tracksdk.TrackEvent;
        import com.autohome.plugincontainer.ui.dialog.GuideDialog;
        import com.intellij.openapi.actionSystem.AnAction;
        import com.intellij.openapi.actionSystem.AnActionEvent;
        import org.jetbrains.annotations.NotNull;

public class GuideDialogAction extends AnAction {
    @Override
    public void actionPerformed(@NotNull AnActionEvent e) {
        GuideDialog guideDialog = new GuideDialog(e.getProject());
        guideDialog.setResizable(true);
        guideDialog.pack();
        guideDialog.show();
        // TrackEvent.newInstance().sendTrack("com.autohome.idea.plugin.container","查看使用指南");
    }
}
