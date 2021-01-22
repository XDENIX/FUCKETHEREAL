import { User, Message, MessageReaction } from 'discord.js'
import { config } from '../../main'
import Command from '../../structures/Command'

export default class CommandsCommand extends Command {
  get options() {
    return { name: 'commands' }
  }

  async execute(message: Message) {

    if (message.channel.type != 'dm') return;

    //title
    let pages = ["```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀МЕНЮ СЕРВЕРА⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```", '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Небольшой путеводитель:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Кастомные роли:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Администраторские роли:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Профиль и некоторая информация:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Экономика сервера:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Статистика топов:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Система влюбленных:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Служебные команды:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Приватная комната:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Личная роль:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Магазин сервера:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Команды лидера гильдии:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀Команды участников:⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Наказания за нарушения:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Зоны сервера:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Общие правила сервера:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀В текстовых запрещены:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```', '```⠀⠀⠀⠀В модерируемых голосовых чатах запрещены:⠀⠀⠀⠀```', '```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Коммуникация на сервере:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```'];
    let page = 4;
    //desc
    let desc = [
      'Чтобы получить информацию о нашем сервере, необходимо нажать на одну из реакций ниже или воспользоваться командами.\n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**!welcome**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n```ini\n[позволит вам узнать информацию о голосовых каналах, ролях и способах их получения.]```\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**!commands**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n```css\n[покажет вам возможности нашего бота, которые значительно украсят и упростят жизнь.]```\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**!rules**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n```fix\n откроет для вас правила нашего сервера.```',
      "<#737004223232999514> — здесь вы можете ознакомиться с  правилами сервера, нарушение которых влечет за собой довольно неприятные последствия.\n<#737008768688324640> — здесь вы можете узнать о нововведениях и интересных событиях, проводящихся на сервере. \n<#737008726237642808> — здесь можно узнать о времени начала какого-либо мероприятия, на котором вы сможете заработать дополнительную валюту сервера.\n<#761614282130587698> — модерируемый текстовый чат для общения.\n<#761614308840177694> — текстовый чат для взаимодействия с ботами.\n<#737034592506085486> — чат для поиска союзников в различных играх.",
      '⚡・ε-ση — пользователи, проявляющие особую активность в голосовых и текстовых каналах.\n🌚・ѕυвlυnary — пользователи, проявляющие особую активность в ночное время суток.\n🌞・lιgнт — пользователи, проявляюшие особую активность в дневное время суток.\n👹・тoxιc — роль, получаемая за неадекватное поведение и токсичное общение.\n☁️・gнoѕт ѕнell — роль, получаемая за адекватное поведение и ламповое общение.\n🎃・evenт мeмвer — роль, позволяющая вам получать уведомления о начале ивента.\n🍌・cυтιe — участники, поддержавшие наш сервер сигной.\n🎶・ѕyмpнony — пользователи, обладающие музыкальным талантом.\n🥀・aeѕтнeтιc — люди, предлагающие контент в <#737037101081690264>.\n🍒・eroтιc — люди, предлагающие контент в <#737040143172632628>.\n\n```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Роли за актив:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```\n> <a:stars1:718612247680647229>Занявшие ТОП-3 в статистике пользователи, каждый месяц получают в награду роли:\n💎・weαℓth — пользователи, имеющие наибольшее количество монет\n🐝・ fαвℓer — пользователи, проявляющие наибольшую активность в текстовых чатах.\n💦・ orαтor — пользователи, проявляющие наибольшую активность в голосовых каналах.',
      '<:invisible:691712892923543593>owner — создатели сервера.\n<:invisible:691712892923543593>orion — главная администрация.\n<:invisible:691712892923543593>Sirius — младшая администрация.\n<:invisible:691712892923543593>Astral — главные модераторы, отвечающие за работоспособность нижестоящих модераторов.\n<:invisible:691712892923543593>Elder event — главные ивентёры, отвечающие за деятельность и активность нижестоящих ивентеров.\n<:invisible:691712892923543593>Ghost — модераторы сервера, следящие за порядком и соблюдением правил в голосовых и текстовых каналах.\n<:invisible:691712892923543593>Phoenix — волонтёры сервера. Помогают в развитии сервера, является частью модерации. Модерируют голосовые и текстовые каналы.',
      '```fix\n!профиль — статистика пользователя;\n!статус — команда позволяет вам установить уникальный статус;\n!репутация @nick +1 или -1 — изменить репутацию пользователю;\n!задний фон — установка заднего фона в ваш профиль;\n/история — история ваших мутов и предупреждений;\n/помощь "суть проблемы" — обратиться к администрации при возникновении проблемы;\n```',
      '```fix\n!$ — проверка баланса;\n!timely или !награда — ежедневная награда;\n!give или !передать — перевести валюту другому пользователю;\n!plant кол-во или !выкинуть — выкинуть определенное количество валюты;\n!pick или !поднять — подобрать выброшенную валюту;\n!bf кол-во t или h — ставка на выпадение орла или решки;\n!br кол-во — более 44 дает х2 валюты, более 70 — x4 и 120 x10;\n!open chest — попытать удачу и открыть сундук за актив;\n```',
      '```css\n!топ богачей - топ пользователей по количеству валюты;\n!топонлайн общий - общее кол-во времени в голосовых каналах;\n!топонлайн недельный - кол-во времени в голосовых каналах за неделю;\n!топонлайн текстовый - общее кол-во сообщений;\n```',
      `> **На сервере можно заключить любовный союз за 5000<:Egold:781552352406143006>**\n<:invisible:691712892923543593><a:ETkawaiihearts:718612246011445250> для вас будет создан уютный домик в категории **«Отель любви»**;\n<:invisible:691712892923543593><a:ETkawaiihearts:718612246011445250> никнейм вашей половинки будет отображаться в вашем **профиле**;\n<:invisible:691712892923543593><a:ETkawaiihearts:718612246011445250> на ивентах пара имеет бонус **x2** наград;\n\`\`\`css\n!пара @ник — предложить встречаться;\n!бросить @ник — расстаться с человеком;\n\`\`\``,
      '```css\n!реакции — список всех реакций бота (приходит вам в личные сообщения от бота);\n!музыкальные боты — просмотр доступности музыкальных ботов;\n!ивентроль — убрать/добавить себе роль 🎃・evenт мeмвer;\n!аватар @линк — просмотреть аватар пользователя;\n!онлайн — узнать кол-во человек в войсах на данный момент;\n!игровыероли — отключение/включение автовыдачи игровых ролей;\n!пинг — проверка здоровья бота;\n!роли — узнать кол-во ролей на сервере;\n!pban — забанить человека в своей приватке;\n!pkick — исключить человека в своей приватке (с возможностью возвращения при наличии свободных слотов);\n!punban — разбанить человека в своей приватке;\n```',
      '```css\n!выдать ключ @Линк — дает пользователю доступ к вашей личной комнате;\n!забрать ключ @Линк — запрещает пользователю доступ к вашей личной комнате;\n!личнаякомната изменить название — изменить название комнаты;\n!личнаякомната удалить — удаляет вашу личную комнату;\n!личнаякомната открыть — открывает вашу личную комнату для всех пользователей сервера;\n!личнаякомната закрыть — закрывает вашу личную комнату для всех пользователей, у которых нет ключа;\n!личнаякомната забанить — закрывает вашу линчую комнату для определенного пользователя навсегда;\n!личнаякомната кикнуть — выкидывает определенного пользователя из вашей личной комнаты (с возможностью возвращения при наличии свободных слотов);\n!личнаякомната разбанить — снимает запрет на вход в вашу личную комнату для определенного пользователя;\n```',
      '```css\n!личнаяроль создать "Название" [#код цвета] — позволяет вам создать личную роль;\n!личнаяроль изменить "Название" — позволяет вам изменить название вашей личной роли;\n!личнаяроль цвет — позволяет вам изменить цвет вашей личной роли;\n!личнаяроль удалить — позволяет вам удалить вашу личную роль;\n```',
      '```fix\n!магазин — общий магазин ролей;\n!shop — магазин временных активаций;\n!buy 1,2,3,4 - приобрести нужную активацию;\n!купить 1,2,3,4 - приобрести нужную роль;\n!activate - активирует на неопределенное время активацию;\n!activations - узнать кол-во времени до окончания активации;\n!inventory - посмотреть свои не использованные активации;\n```',
      '```ini\n/гильдия создать [Название] — позволяет вам создать собственную гильдию;\n/гильдия описание [Текст] — позволяет добавить описание вашей гильдии;\n/гильдия флаг [Cсылка] — позволяет вам установить обложку вашей гильдии;\n/гильдия удалитьфлаг — позволяет вам удалить обложку вашей гильдии;\n/гильдия [НазваниеНынешнее] [НазваниеБудущее] — позволяет изменить название вашей гильдии;\n/гильдия цвет [#цвет_в_hex] — позволяет вам изменить цвет гильдии;\n/гильдия создатьроль [НазваниеРоли] — позволяет создать вам создать роль гильдии;\n/гильдия удалитьцвет — позволяет вам удалить цвет гильдии;\n/гильдия офицер [@Участник] - позволяет вам повысить участника гильдии до офицера;\n/гильдия выгнать [@Участник] — позволяет вам избавиться от ненужных в гильдии людей;\n/гильдия пригласить [@Участник] — позволяет вам пригласить людей в гильдию;\n/гильдия создатьроль [Цена #цвет_в_hex НазваниеРоли] — позволяет добавить роль в магазин вышего клана;\n/удалить гильдию — позволяет вам избавиться от гильдии;\n```',
      '```ini\n/топгильдии — позволяет увидеть список самых активных гильдий;\n/заявка [@лидерГильдии/@названиегильдии] — позволяет отправить заявку на вступление в любую гильдию;\n/прилавок — позволяет посмотреть магазин вышей гильдии;\n/гильдияинфо — позволяет посмотреть информацию о гильдии;\n/покинутьгильдию — позволяет покинуть гильдию;\n/топучастники — позволяет посмотреть список самых активных участников вашей гильдии;\n/купить [idроли] — позволяет приобрести роль из магазина гильдии;\n```',
      '<a:ET_question:745700069470240938> **Предупреждение**  — выдается за нарушение правил.\n<a:ET_question:745700069470240938> **Мут** — блокировка голосового или текстового канала.\n<a:ET_question:745700069470240938> **Бан** — выдаётся за получение двух предупреждений. > Бан может быть выдан и сразу в случае серьезных нарушений.',
      '**Castle Person **\n> White Zone — Категория для людей, поддержавших наш проект донатом и покупкой привилегий на сервере. Эта категория не модерируется.\n\n**Milky Way** \n> Green Zone  — Модерируемая категория, в который соблюдаются все правила нашего сервера, ToS и Community Guidelines.\n\n**Cyber Wave** \n> Neutral Zone — Модерируемая категория, но здесь есть исключение - нецензурная лексика позволена.\n\n**Underworld**\n>  Red Zone — Эта категория не модерируемая. Исключением является правило 3.3.',
      "`1.1`・Запрещено создание комнат, никнеймов, статусов, юзернеймов и ролей, несущих в себе оскорбительный характер по отношению к участникам сервера.\n```css\n[Смена названия, затем Предупреждение, крайняя мера — Бан]\n```\n\n`1.2`・Запрещено разглашение личной информации участников сервера без их согласия. ||(адреса проживания, номера телефонов, личных фотографий/сообщений)|| \n> Имя и возраст - не являются деаноном.\n```css\n[Бан]\n```\n\n`1.3`・Запрещено забирать музыкального бота и применять его команды, если он используется другим пользователем. Вместе с тем запрещается использование более одного бота в голосовых каналах.\n```css\n[Наказание по усмотрению администрации]\n```\n\n`1.4`・Запрещено использование и утаивание багов ботов или самого а.\n```css\n[Наказание по усмотрению администрации]\n```\n\n`1.5`・Запрещена реклама серверов и любых других сторонних ресурсов в каналах, статусах или никнеймах.\n```css\n[Бан]\n```\n\n`1.6`・Необоснованные претензии и обсуждения действий администрации. Любое негативное высказывание в их адрес наказуемо.\n```css\n[Предупреждение, после мут до 160 минут — Предупреждение на усмотрение администрации]\n```\n\n`1.7`・Запрещается регистрация чужих и похожих на сервере никнеймов, то есть являющихся полным или частичным визуальным дублем уже существувющего, а также присвоение себе личности другого человека.\n```css\n[В случае нарушения администрация имеет полное право на смену ника без предупреждения] \n```\n\n`1.8`・Запрещены всяческие попытки обхода наказания, будь это временный мут или бан.\n```css\n[В случае обхода нарушитель получает перманентный бан]\n```\n\n`1.9`・Запрещены любые деструктивные действия по отношению к участникам, администрации и серверу с целью создания помехи для развития сервера.\n```css\n[Перманентный бан]\n`\`\`",
      '`2.1`・Нецензурная лексика в оскорбительном для других пользователей контексте. (Злоупотребление матом наказуемо)\n```ini\n[Предупреждение, после мут до 30 минут]\n```\n\n`2.2`・Дискриминация по любому признаку – половому, расовому, национальному, возрастному, по инвалидности, роду занятий или сексуальной ориентации.\n```ini\n[Предупреждение, после мут до 60 минут]\n```\n\n`2.3`・Создание, подстрекание к конфликтной ситуации. Агрессивный троллинг, направленный на возбуждение ненависти, вражды, конфликтной обстановки в чате.\n```ini\n[Предупреждение, после мут до 120 минут]\n```\n\n`2.4`・Флуд и любая его разновидность. ||(от 5 строк подобного содержания)||\n> Флуд – однотипные нетематические сообщения в чатах, которые зачастую занимают большие объемы\n```ini\n[Предупреждение, после мут до 60 минут]\n```\n\n`2.5`・Cпам.\n> Спам – бесполезная информация, принудительно рассылаемая пользователям более 3-х раз подряд (рассылка слов, предложений, упоминаний пользователей или ролей, гифок)\n```ini\n[Предупреждение, после мут до 30 минут]\n```\n\n`2.6`・Запрещается излишний капс в сообщениях. ||(от 5 слов)||\n```ini\n[Предупреждение, после мут до 30 минут]\n```\n\n`2.7`・Публикация шокирующего контента ||(отправка сообщений, содержащих ссылки на контент порнографического характера, расчлененку, кровавого месива и тд. ) Сюда также входит публикация NSFW-контента в чатах без разрешающей отметки.||\n```ini\n[Удаление сообщений, затем бан]\n```\n\n`2.8` Запрещено нарушение классификации каналов.\n```ini\n[Предупреждение, после мут до 30 минут]\n```',
      '`2.9`・Спойлеры ||(преждевременно раскрытая важная сюжетная информация)||\n```ini\n[Предупреждение, после мут до 60 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.0`・Строго запрещен многократный пинг человека/роли в чате без конкретной цели, смысла и повода. \n```ini\n[Предупреждение, после мут до 60 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.1`・Запрещаются и пресекаются попытки вымогательства: выпрашивание денег, нитро бустов и ролей. \n```ini\n[Предупреждение, после мут до 60 минут — Предупреждение на усмотрение администрации]\n```',
      '`3.2`・Оскорбления любого формата запрещены на сервере: оскорбление личности человека, национализм, дискриминация, религиозные конфликты.\n```fix\n[Мут до 60 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.3`・Запрещено намеренно создавать громкий фон, а также воспроизводить громкие и резкие звуки с использованием сторонних программ для изменения голоса и создания звуковых эффектов, тем самым мешая участникам общаться в голосовых каналах.\n```fix\n[Предупреждение, после мут до 120 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.4`・Неадекватное поведение.\n```fix\n[Предупреждение, после мут до 30 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.5`・Транслирование музыки без согласия всех участников канала.\n```fix\n[Предупреждение, после мут до 30 минут — Предупреждение на усмотрение администрации]\n```\n\n`3.6`・Запрещено создание временных каналов с оскорбительными названиями.\n```fix\n[В случае нарушения администрация без предупреждения удаляет канал] \n```',
      '<a:ET_question:745689519390457918> Незнание правил не освобождает вас от ответственности.\n<a:ET_question:745689519390457918> Правила могут **обновляться** и дополняться без ведома пользователей.\n<a:ET_question:745689519390457918> Запрещена коммерческая деятельность на сервере без разрешения со стороны администрации.\n<a:ET_question:745689519390457918> Запрещены споры с **администрацией**, обсуждение или публичное осуждение действий представителей сервера.\n<a:ET_question:745689519390457918> Правила сервера не могут предусмотреть всех случаев, когда пользователи наводят беспорядки в той или иной форме.\n<a:ET_question:745689519390457918> Если на усмотрение **администрации** ваши действия могут идти во вред **сервера** или нести какой-либо **вред участникам** проекта, а так же препятствовать общению, то Вас вправе **замутить/забанить** на неопределенный срок.'
    ]
    //img
    let image = ['https://cdn.discordapp.com/attachments/724573511569637407/774740843457937448/menu.gif', 'https://imgur.com/zW4lQBZ.gif', 'https://imgur.com/yEziTVp.gif', 'https://imgur.com/SWZQmGy.gif', 'https://imgur.com/YtGF1Tc.gif', 'https://imgur.com/qeIDkmf.gif', 'https://imgur.com/7Zj5CnL.gif', 'https://imgur.com/JxOlO7J.gif', 'https://imgur.com/gNSiOrH.gif', 'https://imgur.com/hMnyvJt.gif', 'https://imgur.com/q8ki5bK.gif', 'https://imgur.com/kUdUTr7.gif', 'https://imgur.com/LH3MS9V.gif', 'https://imgur.com/ZTv9Ady.gif', 'https://imgur.com/PZU9q1H.gif', 'https://imgur.com/xFt3pvB.gif', 'https://imgur.com/WUdM7I3.gif', 'https://imgur.com/WUdM7I3.gif', 'https://imgur.com/Ew0iFwF.gif', 'https://imgur.com/AHdbRvt.gif', 'https://imgur.com/yMI5mSg.gif']

    message.channel.send({
      embed: {
        "title": pages[page],
        "description": desc[page],
        "color": 3092790,
        "footer": {
          "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
        },
        "image": { url: image[page] }
      }
    }).then(msg => {
      msg.delete({ timeout: 600000 }).catch(() => { })

      msg.react(config.emojis.arrowBackwardMenu).then(() => {
        msg.react(config.emojis.welcomeMenu)
        msg.react(config.emojis.commandsMenu)
        msg.react(config.emojis.rulesMenu)
        msg.react(config.emojis.arrowForwardMenu)
        msg.react('🗑️')

        const backwardsFilter = (reaction: MessageReaction, user: User) => reaction.emoji.id === config.emojis.arrowBackwardMenu && user.id === message.author.id;
        const forwardsFilter = (reaction: MessageReaction, user: User) => reaction.emoji.id === config.emojis.arrowForwardMenu && user.id === message.author.id;
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 600000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 600000 });
        const rulesf = (reaction: MessageReaction, user: User) => reaction.emoji.id === config.emojis.rulesMenu && user.id === message.author.id;
        const rules = msg.createReactionCollector(rulesf, { time: 600000 });
        const welcomef = (reaction: MessageReaction, user: User) => reaction.emoji.id === config.emojis.welcomeMenu && user.id === message.author.id;
        const welcome = msg.createReactionCollector(welcomef, { time: 600000 });
        const commandf = (reaction: MessageReaction, user: User) => reaction.emoji.id === config.emojis.commandsMenu && user.id === message.author.id;
        const command = msg.createReactionCollector(commandf, { time: 600000 });
        const backetf = (reaction: MessageReaction, user: User) => reaction.emoji.name === '🗑️' && user.id === message.author.id;
        const backet = msg.createReactionCollector(backetf, { time: 600000 });

        backet.on('collect', () => {

          msg.delete().catch(() => { })
          backet.stop()
          command.stop()
          welcome.stop()
          rules.stop()
          forwards.stop()
          backwards.stop()
        })

        command.on('collect', () => {
          if (page === 4) return;
          page = 4;

          msg.edit({
            embed: {
              "title": pages[page],
              "description": desc[page],
              "color": 3092790,
              "footer": {
                "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
              },
              "image": { url: image[page] }

            }
          })
        })

        rules.on('collect', () => {
          if (page === 14) return;
          page = 14;

          msg.edit({
            embed: {
              "title": pages[page],
              "description": desc[page],
              "color": 3092790,
              "footer": {
                "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
              },
              "image": { url: image[page] }

            }
          })
        })

        welcome.on('collect', () => {
          if (page === 1) return;
          page = 1;

          msg.edit({
            embed: {
              "title": pages[page],
              "description": desc[page],
              "color": 3092790,
              "footer": {
                "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
              },
              "image": { url: image[page] }

            }
          })
        })

        backwards.on('collect', () => {
          page--;
          if (page === -1) page = 21;

          msg.edit({
            embed: {
              "title": pages[page - 1],
              "description": desc[page - 1],
              "color": 3092790,
              "footer": {
                "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
              },
              "image": { url: image[page - 1] }

            }
          })
        })

        forwards.on('collect', () => {
          page++;
          if (page === 22) page = 0;

          msg.edit({
            embed: {
              "title": pages[page - 1],
              "description": desc[page - 1],
              "color": 3092790,
              "footer": {
                "text": "Для повторного вызова меню в будущем, необходимо использовать команду !info."
              },
              "image": { url: image[page - 1] }

            }
          })
        })

      })
    })
  }
}

