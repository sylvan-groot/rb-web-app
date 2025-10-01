package com.sylvan.web_backend.models;
import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "proj_name")
    private String projName;

    @Column(name = "proj_desc_en")
    private String projDescEn;

    @Column(name = "proj_desc_nl")
    private String projDescNl;

    @Column(name = "code_lang_1")
    private String codeLang1;

    @Column(name = "code_lang_2")
    private String codeLang2;

    @Column(name = "code_lang_3")
    private String codeLang3;

    @Column(name = "code_lang_4")
    private String codeLang4;

    @Column(name = "has_git_repo")
    private Boolean hasGitRepo;

    @Column(name = "git_repo_link")
    private String gitRepoLink;

    @Column(name = "img_url")
    private String imgUrl;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProjName() { return projName; }
    public void setProjName(String projName) { this.projName = projName; }

    public String getProjDescEn() { return projDescEn; }
    public void setProjDescEn(String projDescEn) { this.projDescEn = projDescEn; }

    public String getProjDescNl() { return projDescNl; }
    public void setProjDescNl(String projDescNl) { this.projDescNl = projDescNl; }

    public String getCodeLang1() { return codeLang1; }
    public void setCodeLang1(String codeLang1) { this.codeLang1 = codeLang1; }

    public String getCodeLang2() { return codeLang2; }
    public void setCodeLang2(String codeLang2) { this.codeLang2 = codeLang2; }

    public String getCodeLang3() { return codeLang3; }
    public void setCodeLang3(String codeLang3) { this.codeLang3 = codeLang3; }

    public String getCodeLang4() { return codeLang4; }
    public void setCodeLang4(String codeLang4) { this.codeLang4 = codeLang4; }

    public Boolean getHasGitRepo() { return hasGitRepo; }
    public void setHasGitRepo(Boolean hasGitRepo) { this.hasGitRepo = hasGitRepo; }

    public String getGitRepoLink() { return gitRepoLink; }
    public void setGitRepoLink(String gitRepoLink) { this.gitRepoLink = gitRepoLink; }

    public String getImgUrl() { return imgUrl; }
    public void setImgUrl(String imgUrl) { this.imgUrl = imgUrl; }

    @Override
    public String toString() {
        return "Project{id=" + id +
               ", projName='" + projName + '\'' +
               ", projDescEn='" + projDescEn + '\'' +
               ", projDescNl='" + projDescNl + '\'' +
               ", codeLang1='" + codeLang1 + '\'' +
               ", codeLang2='" + codeLang2 + '\'' +
               ", codeLang3='" + codeLang3 + '\'' +
               ", codeLang4='" + codeLang4 + '\'' +
               ", hasGitRepo=" + hasGitRepo +
               ", gitRepoLink='" + gitRepoLink + '\'' +
               ", imgUrl='" + imgUrl + '\'' +
               '}';
    }
}
