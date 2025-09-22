package com.sylvan.web_backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "proj_Name")
    private String projName;

    @Column(name = "proj_Desc")
    private String projDesc;

    @Column(name = "code_Lang_1")
    private String codeLang1;

    @Column(name = "code_Lang_2")
    private String codeLang2;

    @Column(name = "code_Lang_3")
    private String codeLang3;

    @Column(name = "code_Lang_4")
    private String codeLang4;

    @Column(name = "has_Git_Repo")
    private Boolean hasGitRepo;

    @Column(name = "git_Repo_Link")
    private String gitRepoLink;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProjName() { return projName; }
    public void setProjName(String projName) { this.projName = projName; }

    public String getProjDesc() { return projDesc; }
    public void setProjDesc(String projDesc) { this.projDesc = projDesc; }

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

    @Override
    public String toString() {
        return "Project{id=" + id +
               ", projName='" + projName + '\'' +
               ", projDesc='" + projDesc + '\'' +
               ", codeLang1='" + codeLang1 + '\'' +
               ", codeLang2='" + codeLang2 + '\'' +
               ", codeLang3='" + codeLang3 + '\'' +
               ", codeLang4='" + codeLang4 + '\'' +
               ", hasGitRepo=" + hasGitRepo +
               ", gitRepoLink='" + gitRepoLink + '\'' +
               '}';
    }
}
