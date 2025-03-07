import{c as a,a as s,b as e,d as n,F as t,o as i,e as o}from"./@vue-D5S-aMun.js";!function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver((a=>{for(const e of a)if("childList"===e.type)for(const a of e.addedNodes)"LINK"===a.tagName&&"modulepreload"===a.rel&&s(a)})).observe(document,{childList:!0,subtree:!0})}function s(a){if(a.ep)return;a.ep=!0;const s=function(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),"use-credentials"===a.crossOrigin?s.credentials="include":"anonymous"===a.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(a);fetch(a.href,s)}}();o(((a,s)=>{const e=a.__vccOpts||a;for(const[n,t]of s)e[n]=t;return e})({},[["render",function(o,r){return i(),a(t,null,[r[0]||(r[0]=s("div",{class:"articleTitleContainer contentContainer"},[s("div",{class:"articleTitle"},[s("span",{class:"colorStress"},"CLEA:")]),s("div",{class:"articleTitle subTitle"},[s("span",{class:"colorStress"},"C"),n("losed-"),s("span",{class:"colorStress"},"L"),n("oop "),s("span",{class:"colorStress"},"E"),n("mbodied "),s("span",{class:"colorStress"},"A"),n("gent for Enhancing Task Execution in Dynamic Environments ")]),s("div",{class:"arthorNameLine"},[s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Mingcong Lei"),s("span",{class:"sup"},"*, 1, 2, 5"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Ge Wang"),s("span",{class:"sup"},"*, 1, 2, 5"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Yiming Zhao"),s("span",{class:"sup"},"1, 3, 5"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Zhixin Mai"),s("span",{class:"sup"},"1, 2, 5"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Qing Zhao"),s("span",{class:"sup"},"1"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Yao Guo"),s("span",{class:"sup"},"4"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Zhen Li"),s("span",{class:"sup"},"1, 2"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Shuguang Cui"),s("span",{class:"sup"},"1, 2"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"Yatong Han"),s("span",{class:"sup"},"†, 1, 2, 5"),s("span",{class:"arthorName"},", ")]),s("div",{class:"arthorNameContainer"},[s("span",{class:"arthorName"},"and Jinke Ren"),s("span",{class:"sup"},"†, 1 ,2")])]),s("div",{class:"expression"},[s("div",{class:"expressionItem"},[s("span",{class:"sup"}," * "),s("span",{class:"expressionText"},"Equal Contribution, ")]),s("div",{class:"expressionItem"},[s("span",{class:"sup"}," † "),s("span",{class:"expressionText"},"Corresponding Author")])]),s("div",{class:"university"},[s("div",{class:"universityContainer"},[s("span",{class:"sup"}," 1 "),s("span",{class:"universityName"},"Future Network of Intelligence Institute, Shenzhen, ")]),s("div",{class:"universityContainer"},[s("span",{class:"sup"}," 2 "),s("span",{class:"universityName"},"The Chinese University of Hong Kong, Shenzhen, ")]),s("div",{class:"universityContainer"},[s("span",{class:"sup"}," 3 "),s("span",{class:"universityName"},"Harbin Engineering University, ")]),s("div",{class:"universityContainer"},[s("span",{class:"sup"}," 4 "),s("span",{class:"universityName"},"Shanghai Jiao Tong University, ")]),s("div",{class:"universityContainer"},[s("span",{class:"sup"}," 5 "),s("span",{class:"universityName"},"Infused Synapse AI, www.isai.net.cn ")])]),s("div",{class:"buttonGroup"},[s("button",{class:"button",onclick:"window.open('https://arxiv.org/abs/2503.00729')",type:"button"},[s("div",{class:"arxivIcon"}),n(" arXiv ")]),s("button",{class:"button",onclick:"window.open('https://github.com/SP4595/CLEA-Closed-Loop-Embodied-Agent')",type:"button"},[s("div",{class:"gitHubIcon"}),n(" Code ")])])],-1)),r[1]||(r[1]=s("div",{class:"videoDisplayContainer contentContainer coverVideo"},[s("video",{muted:"",playsinline:"",loop:"",controls:"","disable-picture-in-picture":"true"},[s("source",{src:"/CLEA/static/mp4/cover_demo-CSOc0F-B.mp4",type:"video/mp4"})])],-1)),r[2]||(r[2]=e('<div class="articleMainBodyContainer contentContainer" data-v-0f893a20><div class="contentMainTitle" data-v-0f893a20>Abstract</div><div class="content" data-v-0f893a20> Large Language Models (LLMs) exhibit remarkable capabilities in the hierarchical decomposition of complex tasks through semantic reasoning. However, their application in embodied systems faces challenges in ensuring reliable execution of subtask sequences and achieving one-shot success in long-term task completion. To address these limitations in dynamic environments, we propose Closed-Loop Embodied Agent (CLEA)—a novel architecture incorporating four specialized open-source LLMs with functional decoupling for closed-loop task management. The framework features two core innovations: (1) Interactive task planner that dynamically generates executable subtasks based on the environmental memory, and (2) Multimodal execution critic employing an evaluation framework to conduct a probabilistic assessment of action feasibility, triggering hierarchical re-planning mechanisms when environmental perturbations exceed preset thresholds. To validate CLEA’s effectiveness, we conduct experiments in a real environment with manipulable objects, using two heterogeneous robots for object search, manipulation, and search-manipulation integration tasks. Across 12 task trials, CLEA outperforms the baseline model, achieving a 67.3% improvement in success rate and a 52.8% increase in task completion rate. These results demonstrate that CLEA significantly enhances the robustness of task planning and execution in dynamic environments. Our code is available at <a href="https://sp4595.github.io/CLEA/" data-v-0f893a20>https://sp4595.github.io/CLEA/</a>. </div></div><div class="articleMainBodyContainer contentContainer" data-v-0f893a20><div class="contentImg contentImg1" data-v-0f893a20><img src="/CLEA/static/png/begining-CmJNAFQW.png" alt="image" data-v-0f893a20><div class="introText" data-v-0f893a20> Fig. 1. <span class="bold" data-v-0f893a20>Task execution processes of CLEA.</span> (1) Search task: CLEA facilitates adaptive strategy adjustments in partially observable environments. By analyzing visual inputs from robot 2, which remains stationary on the table, CLEA directs robot 1, the mobile unit, to explore alternative locations—such as the interior of the refrigerator—in search of water. (2) Manipulation task: CLEA evaluates the feasibility of each action and dynamically refines its strategy. Upon opening the oven, it determines that placing the apple directly inside is infeasible. Consequently, CLEA adjusts the next step to a more appropriate action: pulling out the grill to create sufficient space, thereby successfully completing the manipulation task. </div></div></div><div class="articleMainBodyContainer contentContainer" data-v-0f893a20><div class="contentImg contentImg2" data-v-0f893a20><img src="/CLEA/static/jpg/AC_-CARj_KvR.webp" alt="image" data-v-0f893a20><div class="introText" data-v-0f893a20> Fig. 2. <span class="bold" data-v-0f893a20>Overview of CLEA.</span> The observer (VLM) provides environmental data, which the summarizer (LLM) processes into memory. The planner (LLM) generates an initial action sequence based on the robot’s skill pool and memory, while the critic (VLM) evaluates action feasibility and offers re-plan recommendations in response to environmental dynamics. </div></div></div>',3))],64)}],["__scopeId","data-v-0f893a20"]])).mount("#app");
