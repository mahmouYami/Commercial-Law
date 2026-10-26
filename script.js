 
        function switchView(viewId) {
            document.querySelectorAll('.page-container').forEach(page => page.classList.remove('active-page'));
            document.getElementById(viewId).classList.add('active-page');
            window.scrollTo({ top: 0, behavior: 'smooth' }); // يرجعك لأول الصفحة لما تبدل بين الصفحات
        }

        function enterPlatform(mode) {
            document.getElementById('bg-overlay').classList.add('dark-mode');
            switchView('view-home');
            const studyCard = document.getElementById('card-study');
            const examCards = document.querySelectorAll('.card-exam');
            const subtitle = document.getElementById('dashboard-subtitle');

            if (mode === 'learn') {
                subtitle.innerText = "Learning Mode Active";
                studyCard.style.display = 'flex';
                examCards.forEach(card => card.style.display = 'none');
            } else if (mode === 'battle') {
                subtitle.innerText = "Battle Mode Active";
                studyCard.style.display = 'none';
                examCards.forEach(card => card.style.display = 'flex');
            }
        }

        function goHome() {
            document.getElementById('bg-overlay').classList.remove('dark-mode');
            switchView('view-landing');
        }

        function toggleAccordion(header) {
            const item = header.parentElement;
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(i => { if (i !== item) i.classList.remove('active'); });
            item.classList.toggle('active');
        }

        const midtermQuestions = [{ q: "اكتب السؤال الأول للميدتيرم هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 0, exp: "الشرح هنا" }];
        const lastYearQuestions = [{ q: "اكتب سؤال العام الماضي هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 2, exp: "الشرح هنا" }];
        const generalQuestions = [{
q: "الشريك المتضامن في شركة التضامن يكتسب صفة التاجر بمجرد:",
c: [
"تعيينه مديراً للشركة",
"تكوين الشركة ودخوله فيها لشخصه ومسؤوليته المطلقة",
"قيده في الغرفة التجارية مفصلاً",
"توزيع الأرباح السنوية"
],
a: 1,
exp: "الشريك المتضامن يكتسب صفة التاجر بقوة القانون بمجرد قيام الشركة وانضمامه إليها بصفته الشخصية، نظراً لمسؤوليته التضامنية والمطلقة في جميع أمواله الخاصة عن ديون الشركة، ودون اشتراط أن يكون مديراً لها."
},
{
q: "القانون التجاري يحكم جميع أوجه النشاط الاقتصادي في الدولة بما فيها الزراعة والمهن الحرة.",
c: [
"خطأ",
"صح"
],
a: 0,
exp: "القانون التجاري لا يحكم جميع أوجه النشاط الاقتصادي؛ فالزراعة والمهن الحرة كأنشطة تعد بطبيعتها أعمالاً مدنية تخضع لأحكام القانون المدني وليس القانون التجاري."
},
{
q: "العمال والمستخدمون لدى التاجر يكتسبون صفة التاجر لأنهم يباشرون أفعالاً تجارية يومية.",
c: [
"صح",
"خطأ"
],
a: 1,
exp: "العمال والمستخدمون لدى التاجر لا يكتسبون صفة التاجر؛ لأنهم يعملون لحساب صاحب العمل وتحت إشرافه وتبعيته، ولا يباشرون الأعمال التجارية بأسمائهم ولحسابهم الخاص."
},
{
q: "الشريك المتضامن يكتسب صفة التاجر وتنتقل إليه آثار إفلاس الشركة حتمياً.",
c: [
"صح",
"خطأ"
],
a: 0,
exp: "الشريك المتضامن يكتسب صفة التاجر بمجرد دخوله الشركة، وإفلاس شركة التضامن يترتب عليه حتماً إفلاس جميع الشركاء المتضامنين فيها شخصياً لأن مسؤوليتهم تضامنية ومطلقة عن ديون الشركة."
},
{
q: "الدولة والهيئات العامة تثبت لها صفة التاجر إذا مارست النشاط التجاري كاحتراف.",
c: [
"صح",
"خطأ"
],
a: 1,
exp: "تسري أحكام القانون التجاري على الأعمال والمعاملات التجارية التي تباشرها الدولة وأشخاص القانون العام، ومع ذلك لا تثبت صفة التاجر للدولة ولا للهيئات والأشخاص الاعتبارية العامة، ولا تخضع لنظام الإفلاس."
},
{
q: "العمل الذي يكون تجارياً بالنسبة لأحد الطرفين ومدنياً بالنسبة للطرف الآخر يُسمى بالعمل:",
c: [
"التبعي",
"المنفرد",
"المختلط",
"البحري"
],
a: 2,
exp: "عندما يكون العمل القانوني تجارياً بالنسبة إلى أحد الطرفين ومدنياً بالنسبة إلى الطرف الآخر، فإن العمل يُعد عندئذٍ ذا طبيعة مختلطة (الأعمال المختلطة)."
},
{
q: "المعيار الذي ينظر إلى شخص القائم بالعمل وينطبق على فئة التجار هو:",
c: [
"المعيار الاقتصادي",
"المعيار الشخصي",
"المعيار المادي",
"المعيار المالي"
],
a: 1,
exp: "المعيار الشخصي ينظر إلى شخص القائم بالعمل ويجعل القانون التجاري خاصاً بفئة التجار فقط وموجهاً لمهنتهم."
},
{
q: "الاحتراف الظاهري للتجارة (كالإعلان في الصحف والتلفزيون) يعامل صاحبه معاملة التاجر حماية للغير.",
c: [
"صح",
"خطأ"
],
a: 0,
exp: "من يعلن للجمهور عبر وسائل الإعلام أو الإعلانات عن ممارسة نشاط تجاري يُعامل معاملة التاجر ويتحمل التزاماته القانونية تطبيقاً لنظرية الظاهر وحماية للغير حسن النية الذي اعتمد على هذا المظهر."
},
{
q: "العقد الذي يتعهد بمقتضاه شخص بتسليم بضائع بصفة دورية ومنتظمة لشخص آخر هو مقاولة:",
c: [
"الصناعة",
"التوريد",
"الوكالة بالعمولة",
"إنشاء المباني"
],
a: 1,
exp: "التوريد هو عقد يتعهد بمقتضاه شخص بأن يسلم بضائع معينة بصفة دورية أو منتظمة خلال فترة معينة لشخص آخر نظير مبلغ معين."
},
{
q: "القيام بالعمل التجاري بصورة طارئة بين الحين والآخر دون اتخاذه مهنة رئيسية يُسمى:",
c: [
"تضامناً",
"مشروعاً",
"احترافاً",
"اعتياداً"
],
a: 3,
exp: "الاعتياد هو تكرار العمل بصورة عارضة أو متقطعة بين الحين والآخر دون أن يرقى إلى مرتبة المهنة الأساسية والمستمرة (الاحتراف)."
},
{
q: "الممثل التجاري (كمندوب المبيعات) يكتسب صفة التاجر لأنه يتعاقد مع الجمهور.",
c: [
"خطأ",
"صح"
],
a: 0,
exp: "الممثل التجاري يرتبط بالتاجر بعقد عمل ويعمل تابعاً له وباسمه ولحسابه، وليس لحسابه الخاص؛ لذا لا يكتسب صفة التاجر مهما كانت طبيعة تعامله مع الجمهور."
},
{
q: "المصدر الرسمي والتشريعي الأول للقانون التجاري المصري هو:",
c: [
"أحكام محكمة النقض",
"العرف التجاري",
"قانون التجارة رقم 17 لسنة 1999",
"الآراء الفقهية"
],
a: 2,
exp: "يعتبر التشريع التجاري الصادر في 17 مايو 1999 (قانون التجارة رقم 17 لسنة 1999) هو المصدر الأول والرسمي للقانون التجاري المصري الذي يتعين على القاضي تطبيق أحكامه على المنازعات التجارية."
},
{
q: "السمسار يعتبر وكيلاً عن الطرفين ويكون طرفاً أصيلاً في العقد الذي يتوسط فيه.",
c: [
"خطأ",
"صح"
],
a: 0,
exp: "مهمة السمسار تقتصر على الوساطة والتقريب بين طرفي التعاقد فقط، ولا يُعد وكيلاً عنهما ولا يكون طرفاً أصيلاً في العقد الذي يتوسط لإبرامه."
},
{
q: "المعيار الذي ينظر إلى طبيعة العمل بغض النظر عن صفة القائم به هو:",
c: [
"المعيار الحرفي",
"المعيار الشخصي",
"المعيار المادي (الموضوعي)",
"معيار المشروع"
],
a: 2,
exp: "المعيار المادي (الموضوعي) يعتمد على طبيعة العمل وموضوعه بحد ذاته لاعتباره تجارياً، بغض النظر عن صفة الشخص القائم به (سواء كان تاجراً أم غير تاجر)."
},
{
q: "الاعتياد على ممارسة العمل التجاري يكفي بمفرده لاكتساب صفة التاجر دون حاجة للاحتراف.",
c: [
"خطأ",
"صح"
],
a: 0,
exp: "مجرد الاعتياد أو تكرار العمل التجاري بصورة عارضة لا يكفي بمفرده لاكتساب صفة التاجر، بل يشترط القانون بالأساس الاحتراف (اتخاذ العمل مهنة رئيسية مستمرة ومصدراً للرزق)."
},
{
q: "المقاول الذي يتعهد بإنشاء مبانٍ يعتبر عمله تجارياً إذا اشترط المشرع أن يتعهد بـ:",
c: [
"تقديم الاستشارة الفنية فقط",
"ترخيص المبنى من الحي",
"توريد المؤن والأدوات اللازمة",
"استئجار مهندسين أجانب"
],
a: 2,
exp: "تُعد جميع المقاولات المتعلقة بإنشاء مبانٍ ونحوها أعمالاً تجارية متى كان المقاول متعهداً بتوريد المؤن والأدوات اللازمة."
},
{
q: "العقد الذي يلتزم فيه شخص بالقيام بعمل قانوني باسمه الخاص لحساب موكله مقابل أجر هو:",
c: [
"السمسرة",
"عقد العمل",
"مقاولة التوريد",
"الوكالة بالعمولة"
],
a: 3,
exp: "الوكالة بالعمولة هي عقد يلتزم بمقتضاه شخص بأن يقوم بعمل قانوني باسمه الخاص لحساب موكله نظير أجر يسمى بالعمولة."
},
{
q: "الدولة وأشخاص القانون العام (كالوزارات الهيئات العامة):",
c: [
"يشهر إفلاسهم عند التوقف عن الدفع",
"لا تثبت لهم صفة التاجر مع خضوع أعمالهم التجارية للقانون التجاري",
"تثبت لهم صفة التاجر مطلقاً",
"يعفون من تطبيق قواعد القانون التجاري"
],
a: 1,
exp: "تسري قواعد القانون التجاري على المعاملات والأعمال التجارية التي تباشرها الدولة وهيئاتها العامة، إلا أن هذه الجهات لا تكتسب صفة التاجر ولا تخضع لإجراءات وشهر الإفلاس."
},
{
q: "التزام التاجر بالتعويض عن أخطائه غير العمدية الناشئة بمناسبة مباشرة تجارته يُعد عملاً:",
c: [
"جنائياً فقط",
"غير مشروع ولا يخضع للقانون",
"تجارياً بالتبعية",
"مدنياً خالصاً"
],
a: 2,
exp: "يعتبر عملاً تجارياً بالتبعية التزام التاجر بالتعويض استناداً إلى المسؤولية غير العقدية عن الأخطاء العمدية أو غير العمدية التي يرتكبها بمناسبة مباشرة تجارته."
},
{
q: "الأعمال المدنية بطبيعتها والتي تكتسب الصفة التجارية بسبب صدورها من تاجر لحاجات تجارته هي:",
c: [
"الأعمال التجارية بالتبعية",
"الأعمال البحرية",
"الأعمال المختلطة",
"الأعمال التجارية المنفردة"
],
a: 0,
exp: "الأعمال التجارية بالتبعية تتميز بأنها مدنية بطبيعتها ولكنها تخضع للقانون التجاري بعد اكتسابها للصفة التجارية، وتعد مصدر تجاريتها من مهنة القائم بها وهو كونه تاجراً لممارسة شؤون تجارته."
}];
        const comprehensiveQuestions = [{ q: "اكتب سؤال الاختبار الشامل هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 3, exp: "الشرح هنا" }];

        let activeQuiz = [];
        let currentIndex = 0;
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let hasAnswered = false;

        function startQuiz(type) {
            if (type === 'midterm') { activeQuiz = midtermQuestions; document.getElementById('quiz-title').innerText = "الميدتيرم"; }
            else if (type === 'lastYear') { activeQuiz = lastYearQuestions; document.getElementById('quiz-title').innerText = "العام الماضي"; }
            else if (type === 'general') { activeQuiz = generalQuestions; document.getElementById('quiz-title').innerText = "بنك الكويز"; }
            
            currentIndex = 0; correctAnswers = 0; wrongAnswers = 0;
            switchView('view-quiz');
            renderQuestion();
        }

        function startComprehensiveQuiz() {
            activeQuiz = comprehensiveQuestions; 
            currentIndex = 0; correctAnswers = 0; wrongAnswers = 0;
            document.getElementById('quiz-title').innerText = "الاختبار الشامل";
            switchView('view-quiz'); 
            renderQuestion(); 
        }

        function renderQuestion() {
            hasAnswered = false;
            document.getElementById('btn-next').style.display = 'none';
            document.getElementById('explanation-box').style.display = 'none';
            
            document.getElementById('val-correct').innerText = correctAnswers;
            document.getElementById('val-wrong').innerText = wrongAnswers;
            document.getElementById('val-remain').innerText = activeQuiz.length - currentIndex;
            
            let progress = (currentIndex / activeQuiz.length) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';

            let currentQ = activeQuiz[currentIndex];
            if(!currentQ) return; 
            
            document.getElementById('question-text').innerText = `${currentIndex + 1}. ${currentQ.q}`;
            let container = document.getElementById('options-container');
            container.innerHTML = '';
            
            currentQ.c.forEach((choice, index) => {
                let btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = choice;
                btn.onclick = () => checkAnswer(index, btn);
                container.appendChild(btn);
            });
        }

        function checkAnswer(selectedIndex, clickedBtn) {
            if (hasAnswered) return;
            hasAnswered = true;
            let currentQ = activeQuiz[currentIndex];
            let buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(btn => btn.disabled = true);

            if (selectedIndex === currentQ.a) {
                clickedBtn.classList.add('correct-ans'); 
                correctAnswers++;
            } else {
                clickedBtn.classList.add('wrong-ans'); 
                buttons[currentQ.a].classList.add('correct-ans'); 
                wrongAnswers++;
            }
            
            document.getElementById('val-correct').innerText = correctAnswers;
            document.getElementById('val-wrong').innerText = wrongAnswers;
            
            let expBox = document.getElementById('explanation-box');
            expBox.innerHTML = `<strong>إضاءة:</strong> ${currentQ.exp || "الإجابة الصحيحة مظللة بالأخضر"}`;
            expBox.style.display = 'block';
            
            document.getElementById('btn-next').style.display = 'block';
        }

        function processNext() {
            currentIndex++;
            if (currentIndex < activeQuiz.length) { 
                renderQuestion(); 
            } else {
                document.getElementById('progress-bar').style.width = '100%';
                switchView('view-score');
                
                let percentage = Math.round((correctAnswers / activeQuiz.length) * 100) || 0;
                document.getElementById('score-value').innerText = percentage + '%';
                document.getElementById('score-fraction').innerText = `${correctAnswers} إجابات صحيحة من أصل ${activeQuiz.length}`;
                document.getElementById('score-circle').style.background = `conic-gradient(var(--neon-cyan) ${percentage}%, transparent 0%)`;
                
                if(percentage >= 50) fireConfetti(); 
            }
        }

        function fireConfetti() {
            var duration = 3000; 
            var end = Date.now() + duration;
            (function frame() {
                confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#00e5ff', '#ff2a75', '#ffffff'] });
                confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#00e5ff', '#ff2a75', '#ffffff'] });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());
        }
    
