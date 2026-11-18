// Nguồn: docs/section_1.csv. Cập nhật mảng này khi CSV thay đổi.
const section1Name = "AIの基礎と歴史";
const section1Data = [
  {
    "id": 1,
    "questionJa": "人間の知的活動をコンピュータで実現・模倣する技術や研究分野の総称は何か？",
    "answerJa": "AI（アーティフィシャル・インテリジェンス / 人工知能）",
    "explanationJa": "学習・推論・認識・判断・生成など、人間の知的活動に関連する能力をコンピュータで実現する技術の総称です。",
    "questionVi": "Thuật ngữ tổng quát chỉ công nghệ hoặc lĩnh vực nghiên cứu thực hiện, mô phỏng các hoạt động trí tuệ của con người trên máy tính là gì?",
    "explanationVi": "Là tên gọi chung cho công nghệ thực hiện các năng lực liên quan đến hoạt động trí tuệ của con người như học tập, suy luận, nhận thức, phán đoán và tạo sinh trên máy tính."
  },
  {
    "id": 2,
    "questionJa": "あらかじめ人間が設定した規則に従って判断や処理を行う方式は何か？",
    "answerJa": "ルールベース",
    "explanationJa": "「もしAならB」のような明示的なルールを人間が設定し、そのルールに基づいて処理する方式です。",
    "questionVi": "Phương thức thực hiện phán đoán và xử lý theo các quy tắc do con người thiết lập sẵn là gì?",
    "explanationVi": "Là phương thức trong đó con người thiết lập các quy tắc rõ ràng như \"nếu A thì B\" và máy tính sẽ xử lý dựa trên các quy tắc đó."
  },
  {
    "id": 3,
    "questionJa": "データから規則性やパターンを学習し、予測や分類などを行う技術は何か？",
    "answerJa": "機械学習（マシーンラーニング）",
    "explanationJa": "人間がすべてのルールを記述するのではなく、データからモデルが規則性を学習する技術です。",
    "questionVi": "Công nghệ học các quy luật và mô hình từ dữ liệu để thực hiện dự đoán, phân loại là gì?",
    "explanationVi": "Là công nghệ mà thay vì con người viết ra tất cả các quy tắc, mô hình sẽ tự học các quy luật từ dữ liệu."
  },
  {
    "id": 4,
    "questionJa": "多数の層を持つニューラルネットワークを利用して複雑な特徴を学習する機械学習手法は何か？",
    "answerJa": "ディープラーニング（深層学習）",
    "explanationJa": "多数の層を持つニューラルネットワークを利用し、データから複雑な特徴を自動的に学習する手法です。",
    "questionVi": "Phương pháp học máy sử dụng mạng nơ-ron nhiều lớp để học các đặc trưng phức tạp là gì?",
    "explanationVi": "Là phương pháp sử dụng mạng nơ-ron có nhiều lớp để tự động học các đặc trưng phức tạp từ dữ liệu."
  },
  {
    "id": 5,
    "questionJa": "データを使った学習が完了し、予測や生成などに利用できる状態となったモデルを何というか？",
    "answerJa": "学習済みモデル",
    "explanationJa": "学習データを用いた訓練が完了し、推論などに利用できるモデルです。",
    "questionVi": "Mô hình đã hoàn thành việc học từ dữ liệu và ở trạng thái có thể sử dụng để dự đoán hoặc tạo sinh được gọi là gì?",
    "explanationVi": "Là mô hình đã hoàn tất việc huấn luyện bằng dữ liệu huấn luyện và có thể sử dụng cho việc suy luận."
  },
  {
    "id": 6,
    "questionJa": "入力データと正解の組を用いてモデルを学習させる方法は何か？",
    "answerJa": "教師あり学習",
    "explanationJa": "正解ラベルが付与されたデータを利用して、入力と正解の対応関係を学習する方法です。",
    "questionVi": "Phương pháp huấn luyện mô hình bằng cách sử dụng các cặp dữ liệu đầu vào và đáp án đúng là gì?",
    "explanationVi": "Là phương pháp học mối quan hệ tương ứng giữa đầu vào và đáp án bằng cách sử dụng dữ liệu đã được gán nhãn đáp án đúng."
  },
  {
    "id": 7,
    "questionJa": "教師あり学習で入力データと共に与えられる正解情報を含むデータを何というか？",
    "answerJa": "教師データ",
    "explanationJa": "モデルが正しい出力を学習するために使用する、正解を含んだデータです。",
    "questionVi": "Dữ liệu chứa thông tin đáp án đúng được cung cấp cùng với dữ liệu đầu vào trong học có giám sát được gọi là gì?",
    "explanationVi": "Là dữ liệu chứa đáp án đúng được sử dụng để mô hình học cách đưa ra kết quả đầu ra chính xác."
  },
  {
    "id": 8,
    "questionJa": "データをあらかじめ定められたカテゴリーに振り分ける機械学習のタスクは何か？",
    "answerJa": "分類",
    "explanationJa": "メールを迷惑メールか否かに分けるなど、入力データをカテゴリーに振り分けるタスクです。",
    "questionVi": "Tác vụ học máy phân chia dữ liệu vào các danh mục được xác định trước là gì?",
    "explanationVi": "Là tác vụ phân chia dữ liệu đầu vào thành các danh mục, chẳng hạn như phân loại thư điện tử thành thư rác hay thư thường."
  },
  {
    "id": 9,
    "questionJa": "売上額や気温のような連続的な数値を予測する機械学習のタスクは何か？",
    "answerJa": "回帰",
    "explanationJa": "入力データから連続値を予測するタスクです。",
    "questionVi": "Tác vụ học máy dự đoán các giá trị số liên tục như doanh số bán hàng hay nhiệt độ là gì?",
    "explanationVi": "Là tác vụ dự đoán các giá trị liên tục từ dữ liệu đầu vào."
  },
  {
    "id": 10,
    "questionJa": "データを2種類のクラスのどちらに属するかを予測する問題は何か？",
    "answerJa": "2値分類（二値分類）",
    "explanationJa": "正常・異常、合格・不合格のように、2つのクラスのどちらかを予測する分類問題です。",
    "questionVi": "Bài toán dự đoán dữ liệu thuộc về một trong hai loại lớp là gì?",
    "explanationVi": "Là bài toán phân loại dự đoán 1 trong 2 lớp, chẳng hạn như bình thường/bất thường, đỗ/trượt."
  },
  {
    "id": 11,
    "questionJa": "データを3種類以上のクラスのうちどれに属するかを予測する問題は何か？",
    "answerJa": "多値分類",
    "explanationJa": "複数のカテゴリーから1つを選択する分類問題です。",
    "questionVi": "Bài toán dự đoán dữ liệu thuộc về lớp nào trong số từ 3 loại lớp trở lên là gì?",
    "explanationVi": "Là bài toán phân loại chọn 1 danh mục từ nhiều danh mục khác nhau."
  },
  {
    "id": 12,
    "questionJa": "分類結果全体のうち正しく予測できた割合を示す指標は何か？",
    "answerJa": "正解率（アキュラシー）",
    "explanationJa": "全予測に対する正解数の割合を表す評価指標です。",
    "questionVi": "Chỉ số thể hiện tỷ lệ dự đoán chính xác trên tổng số kết quả phân loại là gì?",
    "explanationVi": "Là chỉ số đánh giá biểu thị tỷ lệ số dự đoán đúng so với tổng số dự đoán."
  },
  {
    "id": 13,
    "questionJa": "正解ラベルを与えず、データそのものの構造や規則性を学習させる方法は何か？",
    "answerJa": "教師なし学習",
    "explanationJa": "正解ラベルを使用せず、データの特徴や構造をモデルに発見させる学習方法です。",
    "questionVi": "Phương pháp huấn luyện không cung cấp nhãn đáp án mà để mô hình tự học cấu trúc, quy luật của chính dữ liệu là gì?",
    "explanationVi": "Là phương pháp học không sử dụng nhãn đáp án, để mô hình tự phát hiện các đặc trưng và cấu trúc của dữ liệu."
  },
  {
    "id": 14,
    "questionJa": "似た特徴を持つデータ同士をグループに分ける手法は何か？",
    "answerJa": "クラスタリング",
    "explanationJa": "データ間の類似性などに基づき、データを複数のグループに分類する教師なし学習の代表的手法です。",
    "questionVi": "Kỹ thuật phân chia các dữ liệu có đặc trưng tương tự nhau thành các nhóm là gì?",
    "explanationVi": "Là phương pháp tiêu biểu của học không giám sát, phân loại dữ liệu thành nhiều nhóm dựa trên độ tương đồng giữa các dữ liệu."
  },
  {
    "id": 15,
    "questionJa": "データの重要な情報をできるだけ保持しながら特徴量の数を減らすことを何というか？",
    "answerJa": "次元削減",
    "explanationJa": "高次元データの特徴数を減らして、分析や計算を容易にする手法です。",
    "questionVi": "Việc giảm số lượng đặc trưng trong khi vẫn giữ lại thông tin quan trọng của dữ liệu càng nhiều càng tốt được gọi là gì?",
    "explanationVi": "Là phương pháp giảm số lượng đặc trưng của dữ liệu nhiều chiều để giúp việc phân tích và tính toán trở nên dễ dàng hơn."
  },
  {
    "id": 16,
    "questionJa": "エージェントが環境との相互作用を通じて最も望ましい行動を学ぶ方法は何か？",
    "answerJa": "強化学習",
    "explanationJa": "正解データを与える教師あり学習とは異なり、行動の結果得られる報酬信号だけを頼りにAI自身が望ましい行動を発見していく点が特徴です。",
    "questionVi": "Phương pháp tác tử (agent) học các hành động tối ưu nhất thông qua tương tác với môi trường là gì?",
    "explanationVi": "Khác với học có giám sát cung cấp dữ liệu đáp án, phương pháp này có đặc trưng là AI tự mình khám phá hành động tối ưu chỉ dựa vào tín hiệu phần thưởng nhận được từ kết quả hành động."
  },
  {
    "id": 17,
    "questionJa": "強化学習において行動の結果としてエージェントに与えられる価値を何というか？",
    "answerJa": "報酬",
    "explanationJa": "エージェントの行動がどの程度望ましいかを示す信号です。",
    "questionVi": "Giá trị được trao cho tác tử như là kết quả của hành動 trong học tăng cường được gọi là gì?",
    "explanationVi": "Là tín hiệu thể hiện mức độ tối ưu/đáng mong đợi của hành động mà tác tử đã thực hiện."
  },
  {
    "id": 18,
    "questionJa": "強化学習においてある状態などから将来得られると期待される報酬を評価したものは何か？",
    "answerJa": "価値",
    "explanationJa": "現在の状態や行動が将来的にどれだけの報酬につながるかを表します。",
    "questionVi": "Trong học tăng cường, chỉ số đánh giá phần thưởng kỳ vọng sẽ nhận được trong tương lai từ một trạng thái nhất định là gì?",
    "explanationVi": "Thể hiện trạng thái hoặc hành động hiện tại sẽ dẫn đến bao nhiêu phần thưởng trong tương lai."
  },
  {
    "id": 19,
    "questionJa": "強化学習において各状態でどの行動を選択するかを定める戦略を何というか？",
    "answerJa": "施策（ポリシー / 政策）",
    "explanationJa": "エージェントが状態に応じてどの行動を取るかを決定するルールや戦略です。",
    "questionVi": "Trong học tăng cường, chiến lược quy định việc lựa chọn hành động nào ở từng trạng thái được gọi là gì?",
    "explanationVi": "Là quy tắc hoặc chiến lược quyết định tác tử sẽ thực hiện hành động nào tùy theo trạng thái."
  },
  {
    "id": 20,
    "questionJa": "少量のラベル付きデータと大量のラベルなしデータを組み合わせて学習する方法は何か？",
    "answerJa": "半教師あり学習",
    "explanationJa": "教師あり学習と教師なし学習の特徴を組み合わせることで、ラベル付けの負担を抑える方法です。",
    "questionVi": "Phương pháp học kết hợp một lượng nhỏ dữ liệu có nhãn và một lượng lớn dữ liệu không có nhãn là gì?",
    "explanationVi": "Là phương pháp kết hợp các đặc trưng của học có giám sát và học không giám sát nhằm giảm bớt gánh nặng gán nhãn dữ liệu."
  },
  {
    "id": 21,
    "questionJa": "あらゆる問題に対して常に最も優れた機械学習アルゴリズムは存在しないという考え方は何か？",
    "answerJa": "ノーフリーランチ定理",
    "explanationJa": "「無料の昼食はない」という意味の英語の慣用句に由来し、すべての問題で万能な学習アルゴリズムはなく、問題に応じた手法の選択が必要であることを示す考え方です。",
    "questionVi": "Quan điểm cho rằng không tồn tại một thuật toán học máy nào luôn vượt trội nhất cho mọi bài toán là gì?",
    "explanationVi": "Bắt nguồn từ thành ngữ tiếng Anh \"không có bữa trưa nào miễn phí\", thể hiện quan điểm rằng không có thuật toán học tập vạn năng cho tất cả các bài toán, mà cần chọn phương pháp phù hợp tùy theo từng bài toán."
  },
  {
    "id": 22,
    "questionJa": "人の神経回路を参考に多数の人工ニューロンを結合した計算モデルは何か？",
    "answerJa": "ニューラルネットワーク",
    "explanationJa": "多数のノードを接続し、重みなどを学習することで分類などを行うモデルです。",
    "questionVi": "Mô hình tính toán kết nối nhiều nơ-ron nhân tạo dựa trên mạng thần kinh của con người là gì?",
    "explanationVi": "Là mô hình kết nối nhiều nút (node) và học các trọng số để thực hiện việc phân loại, dự đoán."
  },
  {
    "id": 23,
    "questionJa": "ニューラルネットワークで外部からデータを受け取る層は何か？",
    "answerJa": "入力層",
    "explanationJa": "モデルに処理させる特徴量などを最初に受け取る層です。",
    "questionVi": "Trong mạng nơ-ron, lớp nhận dữ liệu từ bên ngoài vào là gì?",
    "explanationVi": "Là lớp đầu tiên tiếp nhận các đặc trưng mà mô hình cần xử lý."
  },
  {
    "id": 24,
    "questionJa": "ニューラルネットワークで入力層と出力層の間に存在する層は何か？",
    "answerJa": "隠れ層（中間層）",
    "explanationJa": "入力された情報を段階的に変換し、複雑な特徴を学習する層です。",
    "questionVi": "Trong mạng nơ-ron, lớp nằm giữa lớp đầu vào và lớp đầu ra là gì?",
    "explanationVi": "Là lớp biến đổi thông tin đầu vào theo từng giai đoạn và học các đặc trưng phức tạp."
  },
  {
    "id": 25,
    "questionJa": "ニューラルネットワークで最終的な予測結果などを出力する層は何か？",
    "answerJa": "出力層",
    "explanationJa": "分類確率や予測値など、モデルによる最終結果を出力する層です。",
    "questionVi": "Trong mạng nơ-ron, lớp đưa ra kết quả dự đoán cuối cùng là gì?",
    "explanationVi": "Là lớp xuất ra kết quả cuối cùng của mô hình như xác suất phân loại hay giá trị dự đoán."
  },
  {
    "id": 26,
    "questionJa": "ニューラルネットワークにおいて入力信号の重要度や結合の強さを表す値は何か？",
    "answerJa": "重み",
    "explanationJa": "学習を通じて調整され、各入力情報が結果に与える影響の大きさを決めます。",
    "questionVi": "Trong mạng nơ-ron, giá trị thể hiện mức độ quan trọng hoặc độ mạnh của liên kết đối với tín hiệu đầu vào là gì?",
    "explanationVi": "Được điều chỉnh thông qua quá trình học, quyết định mức độ ảnh hưởng của từng thông tin đầu vào lên kết quả."
  },
  {
    "id": 27,
    "questionJa": "ニューラルネットワークの各ノードで入力をどのような出力に変換するかを決める関数は何か？",
    "answerJa": "活性化関数",
    "explanationJa": "ニューラルネットワークに非線形性を導入し、複雑な関係を学習可能にします。",
    "questionVi": "Trong từng nút của mạng nơ-ron, hàm quyết định việc chuyển đổi đầu vào thành đầu ra như thế nào là gì?",
    "explanationVi": "Đưa tính phi tuyến vào mạng nơ-ron, giúp mô hình có thể học được các mối quan hệ phức tạp."
  },
  {
    "id": 28,
    "questionJa": "モデルの予測と正解のずれを数値化する関数は何か？",
    "answerJa": "損失関数",
    "explanationJa": "モデルの予測が正解からどれほど外れているかを評価し、学習の目標として使用します。",
    "questionVi": "Hàm số số hóa độ lệch giữa dự đoán của mô hình và đáp án đúng là gì?",
    "explanationVi": "Đánh giá mức độ sai lệch của dự đoán so với đáp án đúng và được sử dụng làm mục tiêu huấn luyện."
  },
  {
    "id": 29,
    "questionJa": "出力側から入力側に向かって誤差を伝え、各重みの修正量を計算する方法は何か？",
    "answerJa": "誤差逆伝播法（バックプロパゲーション）",
    "explanationJa": "損失に対する各パラメーターの影響を逆向きに計算し、ニューラルネットワークを効率的に学習させます。",
    "questionVi": "Phương pháp truyền lỗi từ phía đầu ra ngược về phía đầu vào để tính toán lượng điều chỉnh cho từng trọng số là gì?",
    "explanationVi": "Tính toán ảnh hưởng của từng tham số đối với tổn thất theo chiều ngược lại, giúp mạng nơ-ron học tập một cách hiệu quả."
  },
  {
    "id": 30,
    "questionJa": "損失関数が小さくなる方向にパラメーターを更新する代表的な最適化手法は何か？",
    "answerJa": "勾配降下法",
    "explanationJa": "損失の勾配を利用して、損失を小さくする方向へパラメーターを更新します。",
    "questionVi": "Phương pháp tối ưu hóa tiêu biểu cập nhật các tham số theo hướng làm giảm hàm tổn thất là gì?",
    "explanationVi": "Sử dụng độ dốc (gradient) của hàm tổn thất để cập nhật tham số theo hướng làm giảm tổn thất."
  },
  {
    "id": 31,
    "questionJa": "学習データには非常によく適合する一方、未知のデータでは性能が低下する現象は何か？",
    "answerJa": "過学習（オーバーフィッティング）",
    "explanationJa": "学習データの特徴やノイズに過剰に適合し、未知データへの対応力が低下した状態です。",
    "questionVi": "Hiện tượng mô hình thích ứng quá tốt với dữ liệu huấn luyện nhưng hiệu năng lại giảm trên dữ liệu chưa biết là gì?",
    "explanationVi": "Là trạng thái mô hình khớp quá mức với các đặc trưng và nhiễu của dữ liệu huấn luyện, khiến khả năng đáp ứng dữ liệu mới bị giảm."
  },
  {
    "id": 32,
    "questionJa": "学習に使用していない未知データに対しても適切な予測を行える能力を何というか？",
    "answerJa": "汎化性能",
    "explanationJa": "特別の学習データだけでなく、新しいデータにもモデルが対応できる能力です。",
    "questionVi": "Khả năng mô hình có thể đưa ra dự đoán thích hợp đối với cả dữ liệu mới chưa từng được sử dụng để huấn luyện được gọi là gì?",
    "explanationVi": "Là khả năng mô hình có thể đáp ứng không chỉ dữ liệu huấn luyện cụ thể mà cả các dữ liệu mới."
  },
  {
    "id": 33,
    "questionJa": "検証データの性能が悪化し始めた時点などで学習を停止する過学習対策は何か？",
    "answerJa": "早期終了（アーリーストッピング）",
    "explanationJa": "学習を続けすぎることで過学習が進むことを防ぐため、適切な時点で学習を終了します。",
    "questionVi": "Biện pháp chống học quá mức (overfitting) bằng cách dừng huấn luyện tại thời điểm hiệu năng trên dữ liệu kiểm định bắt đầu suy giảm là gì?",
    "explanationVi": "Kết thúc việc học tại thời điểm thích hợp để ngăn quá trình học quá mức diễn ra do tiếp tục huấn luyện quá lâu."
  },
  {
    "id": 34,
    "questionJa": "モデルが複雑になりすぎないよう損失関数などに制約を加える方法は何か？",
    "answerJa": "正則化",
    "explanationJa": "パラメーターが極端な値になることなどを抑え、過学習を防止するための手法です。",
    "questionVi": "Phương pháp thêm các ràng buộc vào hàm tổn thất để mô hình không trở nên quá phức tạp là gì?",
    "explanationVi": "Là phương pháp kiềm chế tham số đạt đến các giá trị cực đoan nhằm ngăn ngừa học quá mức."
  },
  {
    "id": 35,
    "questionJa": "学習時にニューラルネットワークの一部のノードをランダムに無効化する手法は何か？",
    "answerJa": "ドロップアウト",
    "explanationJa": "特定のノードへの依存を防ぎ、モデルの汎化性能を高めるために利用されます。",
    "questionVi": "Kỹ thuật vô hiệu hóa ngẫu nhiên một số nút trong mạng nơ-ron trong quá trình huấn luyện là gì?",
    "explanationVi": "Được sử dụng để ngăn sự phụ thuộc vào các nút cụ thể và nâng cao khả năng khái quát hóa của mô hình."
  },
  {
    "id": 36,
    "questionJa": "ある目的で学習したモデルの知識を別のタスクに利用する方法は何か？",
    "answerJa": "転移学習",
    "explanationJa": "既存モデルが獲得した特徴や知識を新しいタスクに活用することで、効率的に学習できます。",
    "questionVi": "Phương pháp sử dụng tri thức của mô hình đã được học cho một mục đích này vào một tác vụ khác là gì?",
    "explanationVi": "Bằng cách tận dụng các đặc trưng và tri thức mà mô hình sẵn có đã đạt được vào tác vụ mới, việc học có thể diễn ra hiệu quả."
  },
  {
    "id": 37,
    "questionJa": "既存の学習済みモデルを特定の用途やデータに合わせて追加調整することを何というか？",
    "answerJa": "ファインチューニング",
    "explanationJa": "学習済みモデルのパラメーターを追加学習によって調整し、特定の用途への適応を高めます。",
    "questionVi": "Việc tinh chỉnh bổ sung mô hình đã huấn luyện sẵn cho phù合 với dữ liệu hoặc mục đích sử dụng cụ thể được gọi là gì?",
    "explanationVi": "Điều chỉnh các tham số của mô hình đã huấn luyện thông qua việc học bổ sung, làm tăng tính thích ứng với mục đích cụ thể."
  },
  {
    "id": 38,
    "questionJa": "フィルターをデータ上で移動させながら局所的な特徴を抽出する処理は何か？",
    "answerJa": "畳み込み",
    "explanationJa": "画像などからエッジや模様といった局所的特徴を抽出する処理です。",
    "questionVi": "Quá trình di chuyển bộ lọc trên dữ liệu để trích xuất các đặc trưng cục bộ là gì?",
    "explanationVi": "Là xử lý trích xuất các đặc trưng cục bộ như cạnh, họa tiết từ hình ảnh."
  },
  {
    "id": 39,
    "questionJa": "画像認識などで広く利用される、畳み込み処理を特徴とするニューラルネットワークは何か？",
    "answerJa": "CNN（コンボルーショナル・ニューラルネットワーク / 畳み込みニューラルネットワーク）",
    "explanationJa": "画像の局所的な特徴を捉えることを得意とします。",
    "questionVi": "Mạng nơ-ron có đặc trưng là phép cuộn (convolution), được sử dụng rộng rãi trong nhận dạng hình ảnh là gì?",
    "explanationVi": "Thường rất mạnh trong việc nắm bắt các đặc trưng cục bộ của hình ảnh."
  },
  {
    "id": 40,
    "questionJa": "コンピュータによって画像を分析・理解する技術分野は何か？",
    "answerJa": "コンピュータビジョン",
    "explanationJa": "画像分類、物体検出、顔認識など、視覚情報をコンピュータで扱う技術分野です。",
    "questionVi": "Lĩnh vực công nghệ phân tích và hiểu hình ảnh bằng máy tính là gì?",
    "explanationVi": "Lĩnh vực công nghệ xử lý thông tin thị giác trên máy tính như phân loại ảnh, phát hiện vật thể, nhận diện khuôn mặt."
  },
  {
    "id": 41,
    "questionJa": "過去の情報を次の処理に引き継ぐ仕組みを持つニューラルネットワークは何か？",
    "answerJa": "RNN（リカレント・ニューラルネットワーク / 再帰型ニューラルネットワーク）",
    "explanationJa": "時系列や文章など順序を持つデータを処理するために利用されるニューラルネットワークです。",
    "questionVi": "Mạng nơ-ron có cơ chế chuyển giao thông tin trong quá khứ sang xử lý tiếp theo là gì?",
    "explanationVi": "Mạng nơ-ron được sử dụng để xử lý dữ liệu có thứ tự như chuỗi thời gian hoặc văn bản."
  },
  {
    "id": 42,
    "questionJa": "文章や時系列のように要素の並び順に意味を持つデータは何か？",
    "answerJa": "系列データ",
    "explanationJa": "時間や順序に沿って並ぶデータで、文章、音声、株価などが例です。",
    "questionVi": "Dữ liệu mà thứ tự sắp xếp của các phần tử có ý nghĩa, chẳng hạn như văn bản hay chuỗi thời gian là gì?",
    "explanationVi": "Dữ liệu sắp xếp theo thời gian hoặc thứ tự, ví dụ như văn bản, âm thanh, giá cổ phiếu."
  },
  {
    "id": 43,
    "questionJa": "ニューラルネットワークの層が深くなるなどして、学習時の勾配が極端に小さくなる問題は何か？",
    "answerJa": "勾配消失問題",
    "explanationJa": "誤差を逆伝播する過程で勾配が小さくなり、前段の層が十分に学習できなくなる問題です。",
    "questionVi": "Vấn đề độ dốc (gradient) trở nên quá nhỏ trong quá trình huấn luyện khi các lớp của mạng nơ-ron trở nên sâu hơn là gì?",
    "explanationVi": "Là vấn đề độ dốc bị giảm dần trong quá trình lan truyền ngược sai số, khiến các lớp phía trước không thể học đầy đủ."
  },
  {
    "id": 44,
    "questionJa": "学習時の勾配が極端に大きくなり、学習が不安定になる問題は何か？",
    "answerJa": "勾配爆発問題",
    "explanationJa": "パラメーターの更新が過大になることで、学習が不安定になる問題です。",
    "questionVi": "Vấn đề độ dốc trong quá trình huấn luyện trở nên cực kỳ lớn khiến quá trình học trở nên không ổn định là gì?",
    "explanationVi": "Vấn đề học tập không ổn định do việc cập nhật các tham số trở nên quá mức."
  },
  {
    "id": 45,
    "questionJa": "RNNの長期依存関係を扱いやすくするために考案されたネットワーク構造は何か？",
    "answerJa": "LSTM（ロング・ショートターム・メモリー）",
    "explanationJa": "ゲート構造によって長期間の情報を保持しやすくしています。",
    "questionVi": "Cấu trúc mạng được phát minh nhằm giúp RNN dễ dàng xử lý các phụ thuộc dài hạn là gì?",
    "explanationVi": "Giúp duy trì thông tin trong thời gian dài một cách dễ dàng nhờ vào cấu trúc cổng (gate)."
  },
  {
    "id": 46,
    "questionJa": "入力情報のうち重要な部分に重点を置いて処理する仕組みは何か？",
    "answerJa": "アテンション（注意機構）",
    "explanationJa": "入力要素ごとの重要度を計算し、重要な情報を重点的に参照する仕組みです。",
    "questionVi": "Cơ chế tập trung xử lý vào các phần quan trọng trong thông tin đầu vào là gì?",
    "explanationVi": "Cơ chế tính toán độ quan trọng của từng phần tử đầu vào và tham chiếu tập trung vào thông tin quan trọng."
  },
  {
    "id": 47,
    "questionJa": "アテンションを中心に構成され、現代の大規模言語モデルの基礎となっているモデルは何か？",
    "answerJa": "トランスフォーマーモデル",
    "explanationJa": "RNNのような逐次処理に依存せず、アテンションを活用して系列データを処理するモデルです。",
    "questionVi": "Mô hình được cấu thành trọng tâm bởi cơ chế Attention và là nền tảng của các mô hình ngôn ngữ lớn hiện đại là gì?",
    "explanationVi": "Mô hình xử lý dữ liệu chuỗi bằng cách khai thác Attention mà không phụ thuộc vào xử lý tuần tự như RNN."
  },
  {
    "id": 48,
    "questionJa": "データを潜在空間の確率分布として表現し、新しいデータを生成するモデルは何か？",
    "answerJa": "VAE（バリエーショナル・オートエンコーダー / 変分オートエンコーダー）",
    "explanationJa": "エンコーダーとデコーダーを利用してデータの潜在表現を学習する生成モデルです。",
    "questionVi": "Mô hình biểu diễn dữ liệu dưới dạng phân bố xác suất trong không gian ẩn và tạo ra dữ liệu mới là gì?",
    "explanationVi": "Mô hình tạo sinh học biểu diễn ẩn của dữ liệu bằng cách sử dụng Encoder và Decoder."
  },
  {
    "id": 49,
    "questionJa": "データに含まれる本来必要としないランダムな変動や不要な情報を何というか？",
    "answerJa": "ノイズ",
    "explanationJa": "学習や推論の精度を低下させる可能性のある、目的とは無関係な変動や情報です。",
    "questionVi": "Những biến動 ngẫu nhiên hoặc thông tin không cần thiết vốn có trong dữ liệu được gọi là gì?",
    "explanationVi": "Là thông tin hoặc biến動 không liên quan đến mục tiêu, có thể làm giảm độ chính xác của việc huấn luyện và suy luận."
  },
  {
    "id": 50,
    "questionJa": "入力データを圧縮された内部表現へ変換する部分は何か？",
    "answerJa": "エンコーダー",
    "explanationJa": "入力データの特徴を抽出し、よりコンパクトな表現へ変換します。",
    "questionVi": "Bộ phận chuyển đổi dữ liệu đầu vào thành biểu diễn nội bộ nén là gì?",
    "explanationVi": "Trích xuất các đặc trưng của dữ liệu đầu vào và chuyển đổi chúng thành dạng biểu diễn gọn hơn."
  },
  {
    "id": 51,
    "questionJa": "内部表現から元のデータや新たな出力を生成する部分は何か？",
    "answerJa": "デコーダー",
    "explanationJa": "エンコーダーなどが作成した内部表現を元に、データを復元または生成します。",
    "questionVi": "Bộ phận tái tạo dữ liệu gốc hoặc tạo đầu ra mới từ biểu diễn nội bộ là gì?",
    "explanationVi": "Khôi phục hoặc tạo dữ liệu dựa trên biểu diễn nội bộ do Encoder tạo ra."
  },
  {
    "id": 52,
    "questionJa": "データの特徴を圧縮して数値の並びとして表した内部表現を何というか？",
    "answerJa": "潜在ベクトル",
    "explanationJa": "データの重要な特徴を潜在空間上のベクトルとして表現したものです。",
    "questionVi": "Biểu diễn nội bộ nén các đặc trưng của dữ liệu thành một dãy số được gọi là gì?",
    "explanationVi": "Biểu diễn các đặc trưng quan trọng của dữ liệu dưới dạng một vectơ trong không gian ẩn."
  },
  {
    "id": 53,
    "questionJa": "生成器と識別器を競わせることでリアルなデータを生成するモデルは何か？",
    "answerJa": "GAN（ジェネレーティブ・アドバーサリアル・ネットワーク / 敵対的生成ネットワーク）",
    "explanationJa": "生成器と識別器を敵対的に学習させ、実物に近いデータを生成するモデルです。",
    "questionVi": "Mô hình tạo ra dữ liệu chân thực bằng cách cho bộ tạo sinh và bộ phân biệt cạnh tranh nhau là gì?",
    "explanationVi": "Mô hình huấn luyện đối kháng giữa Generator và Discriminator để tạo dữ liệu gần giống thực tế."
  },
  {
    "id": 54,
    "questionJa": "GANにおいて本物に似たデータを作成する側のネットワークは何か？",
    "answerJa": "生成器（ジェネレーター）",
    "explanationJa": "識別器を騙せるような本物に近いデータを生成する役割を担います。",
    "questionVi": "Trong GAN, mạng chịu trách nhiệm tạo ra dữ liệu giống như thật là gì?",
    "explanationVi": "Đảm nhận vai trò tạo dữ liệu gần giống thật để đánh lừa bộ phân biệt (Discriminator)."
  },
  {
    "id": 55,
    "questionJa": "入力されたデータを認識・分類・予測することを目的とするAIは何か？",
    "answerJa": "識別系AI",
    "explanationJa": "画像認識や分類など、入力情報から判断結果を導くことを主な目的とするAIです。",
    "questionVi": "AI có mục đích nhận dạng, phân loại và dự đoán dữ liệu đầu vào là gì?",
    "explanationVi": "AI có mục đích chính là đưa ra kết quả phán đoán từ thông tin đầu vào, chẳng hạn như nhận diện hình ảnh hay phân loại."
  },
  {
    "id": 56,
    "questionJa": "文章・画像・音声などの新しいコンテンツを作り出すAIは何か？",
    "answerJa": "生成系AI（生成AI）",
    "explanationJa": "生成AIは新しいコンテンツを作り出す技術であるのに対し、識別系AIは入力情報から判断を行う技術を指します。",
    "questionVi": "AI tạo ra các nội dung mới như văn bản, hình ảnh, âm thanh là gì?",
    "explanationVi": "AI tạo sinh là công nghệ tạo ra nội dung mới, trái ngược với AI phân biệt vốn đưa ra phán đoán từ thông tin đầu vào."
  },
  {
    "id": 57,
    "questionJa": "AIを使って実在人物の映像や音声などを精巧に合成・改変する技術やコンテンツを何というか？",
    "answerJa": "ディープフェイク",
    "explanationJa": "ディープラーニングなどを利用して本物と見分けにくい映像や音声を作成する技術です。",
    "questionVi": "Công nghệ hoặc nội dung sử dụng AI để tổng hợp, chỉnh sửa tinh vi hình ảnh/giọng nói của người thật được gọi là gì?",
    "explanationVi": "Công nghệ sử dụng Deep Learning để tạo ra hình ảnh, âm thanh khó phân biệt với hàng thật."
  },
  {
    "id": 58,
    "questionJa": "1956年に開催され、人工知能という研究分野の出発点として知られる会議は何か？",
    "answerJa": "ダートマス会議",
    "explanationJa": "AIという言葉が研究分野として広く認識されるきっかけとなった歴史的な会議です。",
    "questionVi": "Hội nghị tổ chức vào năm 1956, được biết đến là điểm khởi đầu của lĩnh vực nghiên cứu Trí tuệ nhân tạo là gì?",
    "explanationVi": "Hội nghị lịch sử trở thành khởi nguồn giúp thuật ngữ AI được công nhận rộng rãi như một lĩnh vực nghiên cứu."
  },
  {
    "id": 59,
    "questionJa": "探索や推論を中心としたAI研究が注目された最初のブームは何か？",
    "answerJa": "第1次AIブーム",
    "explanationJa": "1950年代後半から1960年代を中心に、探索や推論による問題解決への期待が高まった時期です。",
    "questionVi": "Làn sóng bùng nổ AI đầu tiên chú trọng vào các nghiên cứu AI dựa trên tìm kiếm và suy luận là gì?",
    "explanationVi": "Thời kỳ kỳ vọng cao vào việc giải quyết vấn đề bằng tìm kiếm và suy luận, diễn ra chủ yếu từ cuối những năm 1950 đến những năm 1960."
  },
  {
    "id": 60,
    "questionJa": "多数の候補の中から目的に合う解や経路を見つける処理は何か？",
    "answerJa": "探索",
    "explanationJa": "AIが問題解決のために複数の選択肢を調べ、適切な解を探す処理です。",
    "questionVi": "Quá trình tìm kiếm giải pháp hoặc lộ trình phù hợp với mục tiêu từ nhiều phương án ứng viên là gì?",
    "explanationVi": "Quá trình AI kiểm tra nhiều lựa chọn để tìm lời giải thích hợp cho việc giải quyết vấn đề."
  },
  {
    "id": 61,
    "questionJa": "与えられた知識や情報から論理的に結論を導くことを何というか？",
    "answerJa": "推論",
    "explanationJa": "既知の情報やルールなどを利用して、新しい結論を導き出す処理です。",
    "questionVi": "Việc rút ra kết luận một cách logic từ tri thức hay thông tin cho trước được gọi là gì?",
    "explanationVi": "Quá trình sử dụng thông tin, quy tắc đã biết để đưa ra kết luận mới."
  },
  {
    "id": 62,
    "questionJa": "エキスパートシステムの実用化が注目されたAIのブームは何か？",
    "answerJa": "第2次AIブーム",
    "explanationJa": "1980年代を中心に、専門家の知識をコンピュータに取り込むエキスパートシステムが注目されました。",
    "questionVi": "Làn sóng bùng nổ AI chú trọng vào việc ứng dụng thực tế các hệ chuyên gia (Expert System) là gì?",
    "explanationVi": "Diễn ra chủ yếu vào những năm 1980, tập trung vào các hệ chuyên gia đưa tri thức chuyên gia vào máy tính."
  },
  {
    "id": 63,
    "questionJa": "専門家の知識やルールを利用して専門的判断を行うシステムは何か？",
    "answerJa": "エキスパートシステム",
    "explanationJa": "特定分野の専門家の知識をルールとして蓄積し、それを用いて判断を行うシステムです。",
    "questionVi": "Hệ thống thực hiện phán đoán chuyên môn bằng cách sử dụng tri thức và quy tắc của chuyên gia là gì?",
    "explanationVi": "Hệ thống tích lũy tri thức của chuyên gia trong lĩnh vực cụ thể dưới dạng quy tắc và sử dụng chúng để phán đoán."
  },
  {
    "id": 64,
    "questionJa": "エキスパートシステムなどで問題解決に必要な知識を蓄積したものは何か？",
    "answerJa": "知識ベース",
    "explanationJa": "専門知識、事実、ルールなどを体系的に格納したものです。",
    "questionVi": "Cơ sở lưu trữ tri thức cần thiết cho việc giải quyết vấn đề trong các hệ chuyên gia là gì?",
    "explanationVi": "Nơi lưu trữ có hệ thống các tri thức chuyên môn, sự thật, quy tắc, v.v."
  },
  {
    "id": 65,
    "questionJa": "AIへの期待低下により研究資金や関心が減少した時期は何か？",
    "answerJa": "AIの冬（AIの冬の時代）",
    "explanationJa": "AIへの過度な期待に対して成果が追いつかず、研究投資などが縮小した時期です。",
    "questionVi": "Giai đoạn nguồn vốn nghiên cứu và sự quan tâm sụt giảm do sự suy giảm kỳ vọng vào AI được gọi là gì?",
    "explanationVi": "Thời kỳ đầu tư nghiên cứu bị thu hẹp do kết quả thực tế không theo kịp sự kỳ vọng quá mức vào AI."
  },
  {
    "id": 66,
    "questionJa": "機械学習やディープラーニングの発展を背景として2010年代に本格化したAIブームは何か？",
    "answerJa": "第3次AIブーム",
    "explanationJa": "ビッグデータや計算能力の向上などを背景に、機械学習やディープラーニングが急速に発展しました。",
    "questionVi": "Làn sóng bùng nổ AI bùng nổ vào những năm 2010 dựa trên sự phát triển của học máy và Deep Learning là gì?",
    "explanationVi": "Học máy và Deep Learning phát triển nhanh chóng trên nền tảng dữ liệu lớn và năng lực tính toán nâng cao."
  },
  {
    "id": 67,
    "questionJa": "従来の技術では処理が困難なほど大量・多様なデータを何というか？",
    "answerJa": "ビッグデータ",
    "explanationJa": "大量性、多様性、高速性などを特徴とする大規模なデータ群です。",
    "questionVi": "Dữ liệu khổng lồ và đa dạng đến mức khó xử lý bằng các công nghệ truyền thống được gọi là gì?",
    "explanationVi": "Tập dữ liệu quy mô lớn có đặc trưng là khối lượng lớn, tính đa dạng và tốc độ cao."
  },
  {
    "id": 68,
    "questionJa": "データにノイズを加える過程とノイズを除去する過程を学習してデータを生成するモデルは何か？",
    "answerJa": "拡散モデル（ディフュージョンモデル）",
    "explanationJa": "ノイズから徐々にデータを復元することで、高品質な画像などを生成するモデルです。",
    "questionVi": "Mô hình tạo sinh dữ liệu bằng cách học quá trình thêm nhiễu vào dữ liệu và quá trình loại bỏ nhiễu là gì?",
    "explanationVi": "Mô hình tạo ra hình ảnh chất lượng cao bằng cách khôi phục dần dữ liệu từ nhiễu."
  },
  {
    "id": 69,
    "questionJa": "AIが人間の知能を超えるなど、技術進歩が社会を大きく変える転換点を表す概念は何か？",
    "answerJa": "シンギュラリティ（技術的特異点）",
    "explanationJa": "AIなどの技術が急速に進歩し、社会の予測が困難になる転換点を表す概念です。",
    "questionVi": "Khái niệm thể hiện bước ngoặt mà sự tiến bộ công nghệ làm thay đổi lớn xã hội, chẳng hạn như AI vượt qua trí tuệ con người, là gì?",
    "explanationVi": "Khái niệm thể hiện bước ngoặt khi công nghệ như AI tiến bộ vượt bậc khiến việc dự đoán xã hội trở nên khó khăn."
  },
  {
    "id": 70,
    "questionJa": "アテンション機構を中心に構成されたニューラルネットワークアーキテクチャは何か？",
    "answerJa": "トランスフォーマー",
    "explanationJa": "現在の多くの大規模言語モデルの基礎となっているモデル構造です。",
    "questionVi": "Kiến trúc mạng nơ-ron được cấu thành trọng tâm bởi cơ chế Attention là gì?",
    "explanationVi": "Cấu trúc mô hình làm nền tảng cho nhiều mô hình ngôn ngữ lớn hiện nay."
  },
  {
    "id": 71,
    "questionJa": "膨大なテキストを学習し、文章の理解や生成、質問応答など幅広い言語処理をこなせる巨大なニューラルネットワークは何か？",
    "answerJa": "LLM（ラージ・ランゲージ・モデル / 大規模言語モデル）",
    "explanationJa": "大量のデータと多数のパラメーターを用いて学習した言語モデルです。",
    "questionVi": "Mạng nơ-ron khổng lồ đã học khối lượng văn bản đồ sộ, có khả năng xử lý ngôn ngữ diện rộng như hiểu, tạo văn bản, trả lời câu hỏi là gì?",
    "explanationVi": "Mô hình ngôn ngữ được huấn luyện bằng cách sử dụng lượng dữ liệu khổng lồ và số lượng lớn tham số."
  }
];

sections.push({ id: "section_1", name: section1Name, cards: section1Data });
